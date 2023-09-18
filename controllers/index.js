const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Import controllers
const jobListingController = require('./controllers/jobListingController');
const messageController = require('./controllers/messageController');
const subcontractorController = require('./controllers/subcontractorController');
const userController = require('./controllers/userController');

// Routes for Job Listings
app.get('/job-listings', jobListingController.getAllJobListings);
app.get('/job-listings/:id', jobListingController.getJobListingById);
app.post(
    '/job-listings',
    [
        // Validation middleware using express-validator
        check('title').notEmpty().withMessage('Title cannot be empty'),
        check('description').notEmpty().withMessage('Description cannot be empty'),
    ],
    jobListingController.createJobListing
);
app.put(
    '/job-listings/:id',
    [
        // Validation middleware using express-validator
        check('title').notEmpty().withMessage('Title cannot be empty'),
        check('description').notEmpty().withMessage('Description cannot be empty'),
    ],
    jobListingController.updateJobListing
);
app.delete('/job-listings/:id', jobListingController.deleteJobListing);

// Routes for Messages
app.get('/messages', messageController.getAllMessages);
app.get('/messages/:id', messageController.getMessageById);
app.post(
    '/messages',
    [
        // Validation middleware using express-validator
        check('text').notEmpty().withMessage('Message text cannot be empty'),
        check('userId').notEmpty().withMessage('User ID cannot be empty'),
    ],
    messageController.createMessage
);
app.put(
    '/messages/:id',
    [
        // Validation middleware using express-validator
        check('text').notEmpty().withMessage('Message text cannot be empty'),
        check('userId').notEmpty().withMessage('User ID cannot be empty'),
    ],
    messageController.updateMessage
);
app.delete('/messages/:id', messageController.deleteMessage);

// Routes for Subcontractors
app.get('/subcontractors', subcontractorController.getAllSubcontractors);
app.get('/subcontractors/:id', subcontractorController.getSubcontractorById);
app.post('/subcontractors', subcontractorController.createSubcontractor);
app.put('/subcontractors/:id', subcontractorController.updateSubcontractor);
app.delete('/subcontractors/:id', subcontractorController.deleteSubcontractor);

// Routes for Users
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
