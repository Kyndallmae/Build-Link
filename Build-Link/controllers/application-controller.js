// controllers/application-controller.js
const db = require('../models');

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await db.Application.findAll();
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

exports.createApplication = async (req, res) => {
    try {
        const newApplication = await db.Application.create(req.body);
        res.status(201).json(newApplication);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        await db.Application.update(req.body, {
            where: { application_id: req.params.id }
        });
        res.status(200).json({ message: "Application updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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
