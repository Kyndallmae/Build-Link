const { Contractor } = require('../models/Contractor.js');

exports.create = async (req, res) => {
        try {
        const contractor = await Contractor.create(req.body);
        res.status(201).send(contractor);
    } catch (error) {
        res.status(500).send({ message: "Error creating contractor." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const contractors = await Contractor.findAll();
        res.status(200).send(contractors);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving contractors." });
    }
};

exports.findById = async (req, res) => {
        try {
        const contractor = await Contractor.findByPk(req.params.contractorId);
        if (!contractor) {
            return res.status(404).send({ message: "Contractor not found." });
        }
        res.status(200).send(contractor);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving contractor." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await Contractor.update(req.body, { where: { contractor_id: req.params.contractorId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Contractor not found or no changes made." });
        }
        res.status(200).send({ message: "Contractor updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating contractor." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await Contractor.destroy({ where: { contractor_id: req.params.contractorId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "Contractor not found." });
        }
        res.status(200).send({ message: "Contractor deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting contractor." });
    }
};
