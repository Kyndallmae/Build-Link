// controllers/index.js

const applicationController = require('./applicationController');
const contractorController = require('./contractorController');
const jobListingController = require('./jobListingController');
const messageController = require('./messageController');
const subcontractorController = require('./subcontractorController');
const userController = require('./userController');

module.exports = {
    applicationController,
    contractorController,
    jobListingController,
    messageController,
    subcontractorController,
    userController,
    homeRoutes
};
