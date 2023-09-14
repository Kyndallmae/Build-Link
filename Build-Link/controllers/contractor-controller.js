const db = require('../models');

exports.getAllContractors = async (req, res) => {
    const contractors = await db.Contractor.findAll();
    res.status(200).json(contractors);
};

exports.getContractorById = async (req, res) => {
    const contractor = await db.Contractor.findByPk(req.params.id);
    if (contractor) {
        res.status(200).json(contractor);
    } else {
        res.status(404).json({ error: "Contractor not found" });
    }
};

exports.createContractor = async (req, res) => {
    const newContractor = await db.Contractor.create(req.body);
    res.status(201).json(newContractor);
};

exports.updateContractor = async (req, res) => {
    await db.Contractor.update(req.body, {
        where: { contractor_id: req.params.id }
    });
    res.status(200).json({ message: "Contractor updated successfully" });
};

exports.deleteContractor = async (req, res) => {
    await db.Contractor.destroy({
        where: { contractor_id: req.params.id }
    });
    res.status(200).json({ message: "Contractor deleted successfully" });
};
