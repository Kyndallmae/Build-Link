const { validationResult } = require('express-validator');
const db = require('../models');

// Get all applications
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await db.Application.findAll();
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get an application by its ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await db.Application.findByPk(req.params.id);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ error: "Application not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new application
exports.createApplication = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newApplication = await db.Application.create(req.body);
        res.status(201).json(newApplication);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing application
exports.updateApplication = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await db.Application.update(req.body, {
            where: { application_id: req.params.id }
        });
        res.status(200).json({ message: "Application updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an application by its ID
exports.deleteApplication = async (req, res) => {
    try {
        await db.Application.destroy({
            where: { application_id: req.params.id }
        });
        res.status(200).json({ message: "Application deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
