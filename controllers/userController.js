// Import the User model from the models directory.
const { User } = require('../models/User.js');

// Function to create a new user.
exports.create = async (req, res) => {
    try {
        // Create a new user using data from the request body.
        const user = await User.create(req.body);
        // Respond with a 201 status and the created user.
        res.status(201).send(user);
    } catch (error) {
        // If there's an error, respond with a 500 status and an error message.
        res.status(500).send({ message: "Error creating user." });
    }
};

// Function to retrieve all users.
exports.findAll = async (req, res) => {
    try {
        // Fetch all users.
        const users = await User.findAll();
        // Respond with a 200 status and the fetched users.
        res.status(200).send(users);
    } catch (error) {
        // If there's an error, respond with a 500 status and an error message.
        res.status(500).send({ message: "Error retrieving users." });
    }
};

// Function to retrieve a specific user by its ID.
exports.findById = async (req, res) => {
    try {
        // Fetch a user by its primary key.
        const user = await User.findByPk(req.params.userId);
        // If the user is not found, respond with a 404 status and an error message.
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }
        // Respond with a 200 status and the fetched user.
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving user." });
    }
};

// Function to update a specific user.
exports.update = async (req, res) => {
    try {
        // Update a user based on its ID and the data from the request body.
        const updated = await User.update(req.body, { where: { user_id: req.params.userId } });
        // If no user was updated, respond with a 404 status and an error message.
        if (updated[0] === 0) {
            return res.status(404).send({ message: "User not found or no changes made." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "User updated successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error updating user." });
    }
};

// Function to delete a specific user.
exports.delete = async (req, res) => {
    try {
        // Delete a user based on its ID.
        const deleted = await User.destroy({ where: { user_id: req.params.userId } });
        // If no user was deleted, respond with a 404 status and an error message.
        if (deleted === 0) {
            return res.status(404).send({ message: "User not found." });
        }
        // Respond with a 200 status and a success message.
        res.status(200).send({ message: "User deleted successfully." });
    } catch (error) {
        res.status(500).send({ message: "Error deleting user." });
    }
};
