// Import the Application model from the models directory.
const { Application } = require('../models/Application.js');

// Function to create an application.
exports.create = async (req, res) => {
    try {
        // Create a new application using data from the request body.
        const application = await Application.create(req.body);
        // Respond with a 201 status and the created application.
        res.status(201).send(application);
    } catch (error) {
        // If there's an error, respond with a 500 status and an error message.
        res.status(500).send({ message: "Error creating application." });
    }
};

// Function to retrieve all applications.
exports.findAll = async (req, res) => {
    try {
        // Fetch all applications.
        const applications = await Application.findAll();
        // Respond with a 200 status and the fetched applications.
        res.status(200).send(applications);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving applications." });
    }
};

// Function to retrieve a specific application by its ID.
exports.findById = async (req, res) => {
    try {
        // Fetch an application by its primary key.
        const application = await Application.findByPk(req.params.applicationId);
        // If the application is not found, respond with a 404 status and an error message.
        if (!application) {
            return res.status(404).send({ message: "Application not found." });
        }
        // Respond with a 200 status and the fetched application.
        res.status(200).send(application);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving application." });
    }
};

// Function to update a specific application.
exports.update = async (req, res) => {
    try {
        // Update an application based on its ID and data from the request body.
        const updated = await Application.update(req.body, { where: { application_id: req.params.applicationId } });
        // If no application was updated, respond with a 404 status and an error message.
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Application not found or no changes made." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Application updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating application." });
    }
};

// Function to delete a specific application.
exports.delete = async (req, res) => {
    try {
        // Delete an application based on its ID.
        const deleted = await Application.destroy({ where: { application_id: req.params.applicationId } });
        // If no application was deleted, respond with a 404 status and an error message.
        if (deleted === 0) {
            return res.status(404).send({ message: "Application not found." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Application deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting application." });
    }
};
