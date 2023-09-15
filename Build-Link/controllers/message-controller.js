// Import the 'db' object for database operations
const db = require('../models');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        // Retrieve all messages from the database
        const messages = await db.Message.findAll();
        // Respond with a JSON array of messages and a 200 status code
        res.status(200).json(messages);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Get a message by its ID
exports.getMessageById = async (req, res) => {
    try {
        // Find a message by its primary key (ID)
        const message = await db.Message.findByPk(req.params.id);
        if (message) {
            // If the message is found, respond with it and a 200 status code
            res.status(200).json(message);
        } else {
            // If the message is not found, respond with a 404 status code and an error message
            res.status(404).json({ error: "Message not found" });
        }
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Create a new message
exports.createMessage = async (req, res) => {
    try {
        // Create a new message in the database based on the request body
        const newMessage = await db.Message.create(req.body);
        // Respond with the newly created message and a 201 status code (resource created)
        res.status(201).json(newMessage);
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Update an existing message
exports.updateMessage = async (req, res) => {
    try {
        // Update a message in the database based on the provided ID
        await db.Message.update(req.body, {
            where: { message_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Message updated successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};

// Delete a message by its ID
exports.deleteMessage = async (req, res) => {
    try {
        // Delete a message from the database based on the provided ID
        await db.Message.destroy({
            where: { message_id: req.params.id }
        });
        // Respond with a success message and a 200 status code
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (err) {
        // Handle errors by responding with a JSON error message and a 500 status code
        res.status(500).json({ error: err.message });
    }
};
