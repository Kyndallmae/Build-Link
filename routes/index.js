// Import the Express.js library
const express = require('express');

// Create an Express application instance
const app = express();

// Import the route handlers for various endpoints
const applicationRoutes = require('./routes/applicationRoutes');
const contractorRoutes = require('./routes/contractorRoutes');
const jobListingRoutes = require('./routes/jobListingRoutes');
const messageRoutes = require('./routes/messageRoutes');
const subcontractorRoutes = require('./routes/subcontractorRoutes');
const userRoutes = require('./routes/userRoutes');

// Set up middleware to route requests to the appropriate handlers
app.use('/applications', applicationRoutes);
app.use('/contractors', contractorRoutes);
app.use('/joblistings', jobListingRoutes);
app.use('/messages', messageRoutes);
app.use('/subcontractors', subcontractorRoutes);
app.use('/users', userRoutes);

// Define the port for the Express application
const PORT = process.env.PORT || 3000;

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the Express application instance
module.exports = app;
