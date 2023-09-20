const { Message } = require('../models/Message.js');

exports.create = async (req, res) => {
        try {
        const message = await Message.create(req.body);
        res.status(201).send(message);
    } catch (error) {
        res.status(500).send({ message: "Error creating message." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const messages = await Message.findAll();
        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving messages." });
    }
};

exports.findById = async (req, res) => {
        try {
        const message = await Message.findByPk(req.params.messageId);
        if (!message) {
            return res.status(404).send({ message: "Message not found." });
        }
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving message." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await Message.update(req.body, { where: { message_id: req.params.messageId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "Message not found or no changes made." });
        }
        res.status(200).send({ message: "Message updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating message." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await Message.destroy({ where: { message_id: req.params.messageId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "Message not found." });
        }
        res.status(200).send({ message: "Message deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting message." });
    }
};
