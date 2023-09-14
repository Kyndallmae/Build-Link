// controllers/subcontractor-controller.js
const db = require('../models');

exports.getAllSubcontractors = async (req, res) => {
    try {
        const subcontractors = await db.Subcontractor.findAll();
        res.status(200).json(subcontractors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

exports.createSubcontractor = async (req, res) => {
    try {
        const newSubcontractor = await db.Subcontractor.create(req.body);
        res.status(201).json(newSubcontractor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateSubcontractor = async (req, res) => {
    try {
        await db.Subcontractor.update(req.body, {
            where: { subcontractor_id: req.params.id }
        });
        res.status(200).json({ message: "Subcontractor updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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
