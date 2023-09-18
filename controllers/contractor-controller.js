const { validationResult } = require('express-validator');
const db = require('../models');

// Get all contractors
exports.getAllContractors = async (req, res) => {
    try {
        const contractors = await db.Contractor.findAll();
        res.status(200).json(contractors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a contractor by their ID
exports.getContractorById = async (req, res) => {
    try {
        const contractor = await db.Contractor.findByPk(req.params.id);
        if (contractor) {
            res.status(200).json(contractor);
        } else {
            res.status(404).json({ error: "Contractor not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new contractor
exports.createContractor = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newContractor = await db.Contractor.create(req.body);
        res.status(201).json(newContractor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing contractor
exports.updateContractor = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await db.Contractor.update(req.body, {
            where: { contractor_id: req.params.id }
        });
        res.status(200).json({ message: "Contractor updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a contractor by their ID
exports.deleteContractor = async (req, res) => {
    try {
        await db.Contractor.destroy({
            where: { contractor_id: req.params.id }
        });
        res.status(200).json({ message: "Contractor deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
