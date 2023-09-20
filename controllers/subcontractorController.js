const { Subcontractor } = require('../models/Subcontractor.js');

exports.create = async (req, res) => {
        try {
        const subcontractor = await Subcontractor.create(req.body);
        res.status(201).send(subcontractor);
    } catch (error) {
        res.status(500).send({ message: "Error creating subcontractor." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const subcontractors = await Subcontractor.findAll();
        res.status(200).send(subcontractors);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving subcontractors." });
    }
};

exports.findById = async (req, res) => {
        try {
        const subcontractor = await Subcontractor.findByPk(req.params.subcontractorId);
        if (!subcontractor) {
            return res.status(404).send({ message: "Subcontractor not found." });
        }
        res.status(200).send(subcontractor);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving subcontractor." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await Subcontractor.update(req.body, { where: { subcontractor_id: req.params.subcontractorId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Subcontractor not found or no changes made." });
        }
        res.status(200).send({ message: "Subcontractor updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating subcontractor." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await Subcontractor.destroy({ where: { subcontractor_id: req.params.subcontractorId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "Subcontractor not found." });
        }
        res.status(200).send({ message: "Subcontractor deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting subcontractor." });
    }
};
