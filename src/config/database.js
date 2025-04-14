const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    host: 'localhost',
    user: 'postgres',
    password: 'Hu26gys13', // Replace with your actual password
    database: 'diplom',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
};