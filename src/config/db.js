const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'diplom',
    password: 'Hu26gys13', // Replace with your actual password
    port: 5432,
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