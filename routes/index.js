const router = require('express').Router();

const applicationRoutes = require('./application-routes');
const contractorRoutes = require('./contractor-routes');
const joblistingRoutes = require('./joblisting-routes');
const messageRoutes = require('./message-routes');
const subcontractorRoutes = require('./subcontractor-routes');
const userRoutes = require('./user-routes');

router.use('/applications', applicationRoutes);
router.use('/contractors', contractorRoutes);
router.use('/joblistings', joblistingRoutes);
router.use('/messages', messageRoutes);
router.use('/subcontractors', subcontractorRoutes);
router.use('/users', userRoutes);

module.exports = router;
