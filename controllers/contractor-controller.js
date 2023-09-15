// Import the database module
const db = require('../models');

// Get all contractors
exports.getAllContractors = async (req, res) => {
    // Retrieve all contractors from the database
    const contractors = await db.Contractor.findAll();
    // Respond with all contractors and a 200 status code
    res.status(200).json(contractors);
};

// Get a contractor by their ID
exports.getContractorById = async (req, res) => {
    // Find a contractor by their ID
    const contractor = await db.Contractor.findByPk(req.params.id);
    if (contractor) {
        // If found, send it with a 200 status code
        res.status(200).json(contractor);
    } else {
        // If not found, send a 404 status code with an error message
        res.status(404).json({ error: "Contractor not found" });
    }
};

// Create a new contractor
exports.createContractor = async (req, res) => {
    // Create a new contractor based on the request data
    const newContractor = await db.Contractor.create(req.body);
    // Respond with the newly created contractor and a 201 status code
    res.status(201).json(newContractor);
};

// Update an existing contractor
exports.updateContractor = async (req, res) => {
    // Update a contractor using their ID and request data
    await db.Contractor.update(req.body, {
        where: { contractor_id: req.params.id }
    });
    // Respond with a success message and a 200 status code
    res.status(200).json({ message: "Contractor updated successfully" });
};

// Delete a contractor by their ID
exports.deleteContractor = async (req, res) => {
    // Delete a contractor using their ID
    await db.Contractor.destroy({
        where: { contractor_id: req.params.id }
    });
    // Respond with a success message and a 200 status code
    res.status(200).json({ message: "Contractor deleted successfully" });
};
