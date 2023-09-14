const db = require('../models');

exports.getAllApplications = async (req, res) => {
    const applications = await db.Application.findAll();
    res.status(200).json(applications);
};

exports.getApplicationById = async (req, res) => {
    const application = await db.Application.findByPk(req.params.id);
    if (application) {
        res.status(200).json(application);
    } else {
        res.status(404).json({ error: "Application not found" });
    }
};

exports.createApplication = async (req, res) => {
    const newApplication = await db.Application.create(req.body);
    res.status(201).json(newApplication);
};

exports.updateApplication = async (req, res) => {
    await db.Application.update(req.body, {
        where: { application_id: req.params.id }
    });
    res.status(200).json({ message: "Application updated successfully" });
};

exports.deleteApplication = async (req, res) => {
    await db.Application.destroy({
        where: { application_id: req.params.id }
    });
    res.status(200).json({ message: "Application deleted successfully" });
};
