const pool = require('../config/db');

// Create users table if not exists
const createTable = async() => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Users table created/verified');
    } catch (err) {
        console.error('Error creating users table:', err.message);
        throw err;
    }
};

// Initialize the table when model loads
createTable();

module.exports = {
    createTable
};