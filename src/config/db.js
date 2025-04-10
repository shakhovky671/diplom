const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: Number(process.env.DB_PORT),
});

pool.connect()
    .then(client => {
        console.log('Database connected successfully');
        client.release();
    })
    .catch(err => {
        console.error('Database connection failed:');
        console.error('- Verify .env file has all required variables');
        console.error('- Check database server is running');
        console.error('- Error details:', err.message);
        process.exit(1);
    });

module.exports = pool;