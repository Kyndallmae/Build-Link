const express = require('express');
const app = express();

// Middlewares, e.g., for parsing JSON:
app.use(express.json());

// Connect to the database:
// (You'd typically have a separate function or module for this)

// Set up routes:

// Setting up user routes:
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Setting up subcontractor routes:
const subcontractorRoutes = require('./routes/subcontractorRoutes');
app.use('/subcontractors', subcontractorRoutes);

// Setting up contractor routes:
const contractorRoutes = require('./routes/contractorRoutes');
app.use('/contractors', contractorRoutes);

// Setting up application routes:
const applicationRoutes = require('./routes/applicationRoutes');
app.use('/applications', applicationRoutes);

// Setting up message routes:
const messageRoutes = require('./routes/messageRoutes');
app.use('/messages', messageRoutes);

// Setting up job listing routes:
const jobListingRoutes = require('./routes/jobListingRoutes'); 
app.use('/job-listings', jobListingRoutes);

// Starting the server:
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});