const { validationResult } = require('express-validator');
const db = require('../models');

// Get all subcontractors
exports.getAllSubcontractors = async (req, res) => {
    try {
        const subcontractors = await db.Subcontractor.findAll();
        res.status(200).json(subcontractors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a subcontractor by their ID
exports.getSubcontractorById = async (req, res) => {
    try {
        const subcontractor = await db.Subcontractor.findByPk(req.params.id);
        if (subcontractor) {
            res.status(200).json(subcontractor);
        } else {
            res.status(404).json({ error: "Subcontractor not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new subcontractor
exports.createSubcontractor = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newSubcontractor = await db.Subcontractor.create(req.body);
        res.status(201).json(newSubcontractor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing subcontractor
exports.updateSubcontractor = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await db.Subcontractor.update(req.body, {
            where: { subcontractor_id: req.params.id }
        });
        res.status(200).json({ message: "Subcontractor updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a subcontractor by their ID
exports.deleteSubcontractor = async (req, res) => {
    try {
        await db.Subcontractor.destroy({
            where: { subcontractor_id: req.params.id }
        });
        res.status(200).json({ message: "Subcontractor deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
