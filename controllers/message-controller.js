const { validationResult } = require('express-validator');
const db = require('../models');

// Get all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await db.Message.findAll();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a message by its ID
exports.getMessageById = async (req, res) => {
    try {
        const message = await db.Message.findByPk(req.params.id);
        if (message) {
            res.status(200).json(message);
        } else {
            res.status(404).json({ error: "Message not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new message
exports.createMessage = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newMessage = await db.Message.create(req.body);
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing message
exports.updateMessage = async (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await db.Message.update(req.body, {
            where: { message_id: req.params.id }
        });
        res.status(200).json({ message: "Message updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a message by its ID
exports.deleteMessage = async (req, res) => {
    try {
        await db.Message.destroy({
            where: { message_id: req.params.id }
        });
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
