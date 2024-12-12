const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./rautes/auth');
const eventRoutes = require('./rautes/events');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveris veikia ant prievado ${PORT}`);
});
