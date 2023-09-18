// Import the 'db' object for database operations
const db = require('../models');

// Get all subcontractors
exports.getAllSubcontractors = async (req, res) => {
    try {
        // Retrieve all subcontractors from the database
        const subcontractors = await db.Subcontractor.findAll();
        // Respond with a JSON array of subcontractors and a 200 status code
        res.status(200).json(subcontractors);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Get a subcontractor by their ID
exports.getSubcontractorById = async (req, res) => {
    try {
        // Find a subcontractor by their primary key (ID)
        const subcontractor = await db.Subcontractor.findByPk(req.params.id);
        if (subcontractor) {
            // If the subcontractor is found, respond with it and a 200 status code
            res.status(200).json(subcontractor);
        } else {
            // If the subcontractor is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "Subcontractor not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Create a new subcontractor
exports.createSubcontractor = async (req, res) => {
    try {
        // Create a new subcontractor in the database based on the request body
        const newSubcontractor = await db.Subcontractor.create(req.body);
        // Respond with the newly created subcontractor and a 201 status code (resource created)
        res.status(201).json(newSubcontractor);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Update an existing subcontractor
exports.updateSubcontractor = async (req, res) => {
    try {
        // Update a subcontractor in the database based on the provided ID
        await db.Subcontractor.update(req.body, {
            where: { subcontractor_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Subcontractor updated successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Delete a subcontractor by their ID
exports.deleteSubcontractor = async (req, res) => {
    try {
        // Delete a subcontractor from the database based on the provided ID
        await db.Subcontractor.destroy({
            where: { subcontractor_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Subcontractor deleted successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};
