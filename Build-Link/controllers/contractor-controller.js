// controllers/contractor-controller.js
const db = require('../models');

exports.getAllContractors = async (req, res) => {
    try {
        const contractors = await db.Contractor.findAll();
        res.status(200).json(contractors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

exports.createContractor = async (req, res) => {
    try {
        const newContractor = await db.Contractor.create(req.body);
        res.status(201).json(newContractor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateContractor = async (req, res) => {
    try {
        await db.Contractor.update(req.body, {
            where: { contractor_id: req.params.id }
        });
        res.status(200).json({ message: "Contractor updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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
