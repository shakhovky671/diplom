const logger = require('../logger/logger');

const validateUser = (req, res, next) => {
    // Check if body exists
    if (!req.body || Object.keys(req.body).length === 0) {
        logger.error(`Validation failed: No body provided for ${req.method} ${req.path}`);
        return res.status(400).json({
            success: false,
            error: 'Request body is required',
            path: req.path,
            method: req.method
        });
    }

    // Check Content-Type
    if (!req.is('application/json')) {
        logger.error(`Validation failed: Invalid Content-Type for ${req.method} ${req.path}`);
        return res.status(415).json({
            success: false,
            error: 'Content-Type must be application/json',
            path: req.path,
            method: req.method
        });
    }

    // Check required fields
    const requiredFields = ['name', 'email'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        logger.error(`Validation failed: Missing fields (${missingFields.join(', ')}) for ${req.method} ${req.path}`);
        return res.status(400).json({
            success: false,
            error: `Missing required fields: ${missingFields.join(', ')}`,
            path: req.path,
            method: req.method,
            requiredFields
        });
    }

    next();
};

module.exports = validateUser;