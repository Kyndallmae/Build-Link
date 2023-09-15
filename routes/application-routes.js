// routes/application-routes.js
const express = require('express');
const router = express.Router();

const applicationController = require('../controllers/application-controller');

// Application routes
router.get('/applications', applicationController.getAllApplications);
router.get('/applications/:id', applicationController.getApplicationById);
router.post('/applications', applicationController.createApplication);
router.put('/applications/:id', applicationController.updateApplication);
router.delete('/applications/:id', applicationController.deleteApplication);

module.exports = router;
