const express = require('express');
const app = express();

const applicationRoutes = require('./routes/applicationRoutes');
const contractorRoutes = require('./routes/contractorRoutes');
const jobListingRoutes = require('./routes/jobListingRoutes');
const messageRoutes = require('./routes/messageRoutes');
const subcontractorRoutes = require('./routes/subcontractorRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/applications', applicationRoutes);
app.use('/contractors', contractorRoutes);
app.use('/joblistings', jobListingRoutes);
app.use('/messages', messageRoutes);
app.use('/subcontractors', subcontractorRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
