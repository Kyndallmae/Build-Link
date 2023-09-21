// Importing the required modules
const express = require('express');
// Creating a new router instance from the Express framework
const router = express.Router();

// Importing the subcontractor controller, which contains functions 
// to handle specific routes associated with subcontractors
const subcontractorController = require('../controllers/subcontractorController');

// Setting up routes for subcontractors:

// Route for creating a new subcontractor.
// When a POST request is made to the root of this router, 
// the 'create' function from the subcontractorController is called.
router.post('/', subcontractorController.create);

// Route for retrieving all subcontractors.
// When a GET request is made to the root of this router, 
// the 'findAll' function from the subcontractorController is called.
router.get('/', subcontractorController.findAll);

// Route for retrieving a specific subcontractor based on their ID.
// ':subcontractorId' acts as a dynamic placeholder in the URL for the actual ID.
router.get('/:subcontractorId', subcontractorController.findById);

// Route for updating details of a specific subcontractor using their ID.
router.put('/:subcontractorId', subcontractorController.update);

// Route for deleting a specific subcontractor using their ID.
router.delete('/:subcontractorId', subcontractorController.delete);

// Exporting the router so it can be used in the main application or other modules.
module.exports = router;
