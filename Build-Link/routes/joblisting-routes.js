// joblisting-routes.js
const express = require('express');
const router = express.Router();

const joblistingController = require('./controllers/joblisting-controller');

// Job Listing routes
router.get('/joblistings', joblistingController.getAll);
router.get('/joblistings/:id', joblistingController.getOne);
router.post('/joblistings', joblistingController.create);
router.put('/joblistings/:id', joblistingController.update);
router.delete('/joblistings/:id', joblistingController.delete);

module.exports = router;
