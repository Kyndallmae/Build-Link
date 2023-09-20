const { Application } = require('../models/Application.js');

exports.create = async (req, res) => {
    try {
        const application = await Application.create(req.body);
        res.status(201).send(application);
    } catch (error) {
        res.status(500).send({ message: "Error creating application." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const applications = await Application.findAll();
        res.status(200).send(applications);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving applications." });
    }
};

exports.findById = async (req, res) => {
        try {
        const application = await Application.findByPk(req.params.applicationId);
        if (!application) {
            return res.status(404).send({ message: "Application not found." });
        }
        res.status(200).send(application);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving application." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await Application.update(req.body, { where: { application_id: req.params.applicationId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Application not found or no changes made." });
        }
        res.status(200).send({ message: "Application updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating application." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await Application.destroy({ where: { application_id: req.params.applicationId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "Application not found." });
        }
        res.status(200).send({ message: "Application deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting application." });
    }
};
