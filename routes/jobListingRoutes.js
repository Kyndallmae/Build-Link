// Importing the required modules
const express = require('express');
// Creating a new router instance from the Express framework
const router = express.Router();

// Importing the jobListing controller, which contains functions 
// to handle specific routes associated with job listings
const jobListingController = require('../controllers/jobListingController');

// Setting up routes for job listings:

// Route for creating a new job listing.
// When a POST request is made to the root of this router, 
// the 'create' function from the jobListingController is called.
router.post('/', jobListingController.create);

// Route for retrieving all job listings.
// When a GET request is made to the root of this router, 
// the 'findAll' function from the jobListingController is called.
router.get('/', jobListingController.findAll);

// Route for retrieving a specific job listing based on its ID.
// ':jobListingId' acts as a dynamic placeholder in the URL for the actual ID.
router.get('/:jobListingId', jobListingController.findById);

// Route for updating details of a specific job listing using its ID.
router.put('/:jobListingId', jobListingController.update);

// Route for deleting a specific job listing using its ID.
router.delete('/:jobListingId', jobListingController.delete);

// Exporting the router so it can be used in the main application or other modules.
module.exports = router;
