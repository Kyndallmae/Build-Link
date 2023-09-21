// Importing controllers for different parts of the application.

// Controller for handling application-related routes and operations.
const applicationController = require('./applicationController');

// Controller for handling contractor-related routes and operations.
const contractorController = require('./contractorController');

// Controller for handling job listing-related routes and operations.
const jobListingController = require('./jobListingController');

// Controller for handling message-related routes and operations.
const messageController = require('./messageController');

// Controller for handling subcontractor-related routes and operations.
const subcontractorController = require('./subcontractorController');

// Controller for handling user-related routes and operations.
const userController = require('./userController');

// Export all the imported controllers so that they can be accessed by other parts of the application.
module.exports = {
    applicationController,
    contractorController,
    jobListingController,
    messageController,
    subcontractorController,
    userController,
};
