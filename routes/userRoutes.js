// Importing the required modules
const express = require('express');
// Creating a new router instance from the Express framework
const router = express.Router();

// Importing the user controller, which contains functions 
// to handle specific routes associated with users
const userController = require('../controllers/userController');

// Setting up routes for users:

// Route for creating a new user.
// When a POST request is made to the root of this router, 
// the 'create' function from the userController is called.
router.post('/', userController.create);

// Route for retrieving all users.
// When a GET request is made to the root of this router, 
// the 'findAll' function from the userController is called.
router.get('/', userController.findAll);

// Route for retrieving a specific user based on their ID.
// ':userId' acts as a dynamic placeholder in the URL for the actual ID.
router.get('/:userId', userController.findById);

// Route for updating details of a specific user using their ID.
router.put('/:userId', userController.update);

// Route for deleting a specific user using their ID.
router.delete('/:userId', userController.delete);

// Exporting the router so it can be used in the main application or other modules.
module.exports = router;
