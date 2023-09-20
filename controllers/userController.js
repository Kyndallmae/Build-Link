const { User } = require('../models/User.js');

exports.create = async (req, res) => {
        try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ message: "Error creating user." });
    }
};

exports.findAll = async (req, res) => {
        try {
        const users = await User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving users." });
    }
};

exports.findById = async (req, res) => {
        try {
        const user = await User.findByPk(req.params.userId);
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving user." });
    }
};

exports.update = async (req, res) => {
        try {
        const updated = await User.update(req.body, { where: { user_id: req.params.userId } });
        if (updated[0] === 0) {
            return res.status(404).send({ message: "User not found or no changes made." });
        }
        res.status(200).send({ message: "User updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating user." });
    }
};

exports.delete = async (req, res) => {
        try {
        const deleted = await User.destroy({ where: { user_id: req.params.userId } });
        if (deleted === 0) {
            return res.status(404).send({ message: "User not found." });
        }
        res.status(200).send({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting user." });
    }
};
