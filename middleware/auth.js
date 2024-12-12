const jwt = require("jsonwebtoken");

// Middleware to verify user token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Prieiga uždrausta. Nėra token arba netinkamas formatas." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "secretKey");
        req.user = decoded; // Add decoded user info to request
        next();
    } catch (err) {
        console.error("Klaida tikrinant token:", err.message);
        res.status(403).json({ message: "Token nevalidus arba pasibaigęs." });
    }
};

// Middleware to verify if user is admin
const verifyAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(403).json({ message: "Prieiga uždrausta. Token trūksta arba netinkamas." });
    }

    if (req.user.role !== 'admin') {
        console.error("Vartotojo rolė nėra admin:", req.user.role);
        return res.status(403).json({ message: "Prieiga uždrausta. Neturite administratoriaus teisės." });
    }

    next();
};

module.exports = { verifyToken, verifyAdmin };
