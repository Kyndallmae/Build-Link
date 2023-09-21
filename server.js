// Dependencies
const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Loading environment variables from a .env file
require('dotenv').config();

// Creating an Express application instance
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up the database connection and models
const sequelize = require('./config/connection.js');

// Middleware for parsing request body and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up express-session
const sess = {
    secret: process.env.SESSION_SECRET, // A secret key for session data encryption
    store: new SequelizeStore({
        db: sequelize // Using Sequelize to store session data in the database
    }),
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

// Importing the models and their associations
require('./models');

// Setting up routes

// Routes for managing applications
const applicationRoutes = require('./routes/applicationRoutes');
app.use('/applications', applicationRoutes);

// Routes for managing contractors
const contractorRoutes = require('./routes/contractorRoutes');
app.use('/contractors', contractorRoutes);

// Routes for managing job listings
const jobListingRoutes = require('./routes/jobListingRoutes');
app.use('/joblistings', jobListingRoutes);

// Routes for managing messages
const messageRoutes = require('./routes/messageRoutes');
app.use('/messages', messageRoutes);

// Routes for managing subcontractors
const subcontractorRoutes = require('./routes/subcontractorRoutes');
app.use('/subcontractors', subcontractorRoutes);

// Routes for managing users
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Start the server after a successful database connection
sequelize.sync({ force: false }) // force: true would drop and recreate tables on every startup
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// Exporting the Express app to be used elsewhere
module.exports = app;
