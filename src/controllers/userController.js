const pool = require('../config/db');
const userModel = require('../models/userModel');
exports.getUsers = async(req, res) => {
    try {
        await userModel.createTable();
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            path: req.path,
            method: req.method
        });
    }
};
exports.createUser = async(req, res) => {
    const { name, email } = req.body;
    try {
        await userModel.createTable();
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            path: req.path,
            method: req.method
        });
    }
};
exports.updateUser = async(req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING * ', [name, email, id]);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};