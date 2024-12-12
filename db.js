const mysql = require('mysql');

// Sukuriame MySQL prisijungimą
const db = mysql.createConnection({
    host: 'localhost', // Arba jūsų serverio IP
    user: 'root',      // Duomenų bazės vartotojo vardas
    password: '',      // Duomenų bazės slaptažodis
    database: 'uzduotis' // Duomenų bazės pavadinimas
});

// Prijungiame prie MySQL duomenų bazės
db.connect((err) => {
    if (err) {
        console.error('Nepavyko prisijungti prie duomenų bazės:', err);
        throw err;
    }
    console.log('Duomenų bazė prijungta!');
});

module.exports = db;
