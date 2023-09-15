// routes/joblisting-routes.js
const express = require('express');
const router = express.Router();

const joblistingController = require('../controllers/joblisting-controller');

// Job Listing routes
router.get('/joblistings', joblistingController.getAllJobListings);
router.get('/joblistings/:id', joblistingController.getJobListingById);
router.post('/joblistings', joblistingController.createJobListing);
router.put('/joblistings/:id', joblistingController.updateJobListing);
router.delete('/joblistings/:id', joblistingController.deleteJobListing);

module.exports = router;
