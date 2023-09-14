// controllers/message-controller.js
const db = require('../models');

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await db.Message.findAll();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

exports.createMessage = async (req, res) => {
    try {
        const newMessage = await db.Message.create(req.body);
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMessage = async (req, res) => {
    try {
        await db.Message.update(req.body, {
            where: { message_id: req.params.id }
        });
        res.status(200).json({ message: "Message updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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
