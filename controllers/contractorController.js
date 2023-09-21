// Import the Contractor model from the models directory.
const { Contractor } = require('../models/Contractor.js');

// Function to create a new contractor.
exports.create = async (req, res) => {
    try {
        // Create a new contractor using the data from the request body.
        const contractor = await Contractor.create(req.body);
        // Respond with a 201 status and the created contractor.
        res.status(201).send(contractor);
    } catch (error) {
        // If there's an error, respond with a 500 status and an error message.
        res.status(500).send({ message: "Error creating contractor." });
    }
};

// Function to retrieve all contractors.
exports.findAll = async (req, res) => {
    try {
        // Fetch all contractors.
        const contractors = await Contractor.findAll();
        // Respond with a 200 status and the fetched contractors.
        res.status(200).send(contractors);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving contractors." });
    }
};

// Function to retrieve a specific contractor by its ID.
exports.findById = async (req, res) => {
    try {
        // Fetch a contractor by its primary key.
        const contractor = await Contractor.findByPk(req.params.contractorId);
        // If the contractor is not found, respond with a 404 status and an error message.
        if (!contractor) {
            return res.status(404).send({ message: "Contractor not found." });
        }
        // Respond with a 200 status and the fetched contractor.
        res.status(200).send(contractor);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving contractor." });
    }
};

// Function to update a specific contractor.
exports.update = async (req, res) => {
    try {
        // Update a contractor based on its ID and the data from the request body.
        const updated = await Contractor.update(req.body, { where: { contractor_id: req.params.contractorId } });
        // If no contractor was updated, respond with a 404 status and an error message.
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Contractor not found or no changes made." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Contractor updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating contractor." });
    }
};

// Function to delete a specific contractor.
exports.delete = async (req, res) => {
    try {
        // Delete a contractor based on its ID.
        const deleted = await Contractor.destroy({ where: { contractor_id: req.params.contractorId } });
        // If no contractor was deleted, respond with a 404 status and an error message.
        if (deleted === 0) {
            return res.status(404).send({ message: "Contractor not found." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "Contractor deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting contractor." });
    }
};
