// Dependencies
const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Loading environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Setting up the database connection and models
const sequelize = require('./config/connection.js');

// Middleware for parsing request body and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up express-session
const sess = {
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
        db: sequelize
    }),
    resave: false,
    saveUninitialized: false,
};

app.use(session(sess));

// Importing the models and their associations
require('./models');

// Setting up routes
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

// Start the server after a successful database connection
sequelize.sync({ force: false })  // force: true would drop and recreate tables on every startup
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

module.exports = app;
