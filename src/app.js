require('dotenv').config();
const express = require('express');
const pool = require('./config/db');
const routes = require('./routes');
const app = express();
const logger = require('./logger');
app.use(express.json());
app.use('/', routes);

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});
app.use((err, req, res, next) => {
    logger.error(err.message);
    res.status(500).send('Something broke!');
});
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database', err.stack);
    } else {
        console.log('Connected to the database:', res.rows);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});