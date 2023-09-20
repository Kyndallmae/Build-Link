const express = require('express');
const router = express.Router();

const applicationRoutes = require('./applicationRoutes');
const contractorRoutes = require('./contractorRoutes');
const jobListingRoutes = require('./jobListingRoutes');
const messageRoutes = require('./messageRoutes');
const subcontractorRoutes = require('./subcontractorRoutes');
const userRoutes = require('./userRoutes');

router.use('/applications', applicationRoutes);
router.use('/contractors', contractorRoutes);
router.use('/joblistings', jobListingRoutes);
router.use('/messages', messageRoutes);
router.use('/subcontractors', subcontractorRoutes);
router.use('/users', userRoutes);

module.exports = router;
