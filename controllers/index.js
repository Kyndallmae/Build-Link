// Import the Express Router
const router = require('express').Router();

// Import user-related routes from 'user-routes.js'
const userRoutes = require('../routes/user-routes');

// Import subcontractor-related routes from 'subcontractor-routes.js'
const subcontractorRoutes = require('./subcontractor-routes');

// Import message-related routes from 'message-route.js'
const messageRoutes = require('./message-route');

// Use the user routes under the '/users' endpoint
router.use('/users', userRoutes);

// Use the subcontractor routes under the '/subcontractors' endpoint
router.use('/subcontractors', subcontractorRoutes);

// Use the message routes under the '/messages' endpoint
router.use('/messages', messageRoutes);

// Export the configured router for use in other parts of the application
module.exports = router;
