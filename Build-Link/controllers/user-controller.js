const db = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
};

exports.createUser = async (req, res) => {
    const newUser = await db.User.create(req.body);
    res.status(201).json(newUser);
};

exports.updateUser = async (req, res) => {
    await db.User.update(req.body, {
        where: { user_id: req.params.id }
    });
    res.status(200).json({ message: "User updated successfully" });
};

exports.deleteUser = async (req, res) => {
    await db.User.destroy({
        where: { user_id: req.params.id }
    });
    res.status(200).json({ message: "User deleted successfully" });
};
