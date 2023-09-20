const express = require('express');
const router = express.Router();
const jobListingController = require('../controllers/jobListingController');

router.post('/', jobListingController.create);
router.get('/', jobListingController.findAll);
router.get('/:jobListingId', jobListingController.findById);
router.put('/:jobListingId', jobListingController.update);
router.delete('/:jobListingId', jobListingController.delete);

module.exports = router;
