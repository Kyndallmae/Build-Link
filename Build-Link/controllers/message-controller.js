const db = require('../models');

exports.getAllMessages = async (req, res) => {
    const messages = await db.Message.findAll();
    res.status(200).json(messages);
};

exports.getMessageById = async (req, res) => {
    const message = await db.Message.findByPk(req.params.id);
    if (message) {
        res.status(200).json(message);
    } else {
        res.status(404).json({ error: "Message not found" });
    }
};

exports.createMessage = async (req, res) => {
    const newMessage = await db.Message.create(req.body);
    res.status(201).json(newMessage);
};

exports.updateMessage = async (req, res) => {
    await db.Message.update(req.body, {
        where: { message_id: req.params.id }
    });
    res.status(200).json({ message: "Message updated successfully" });
};

exports.deleteMessage = async (req, res) => {
    await db.Message.destroy({
        where: { message_id: req.params.id }
    });
    res.status(200).json({ message: "Message deleted successfully" });
};
