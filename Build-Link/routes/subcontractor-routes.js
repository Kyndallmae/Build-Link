// routes/subcontractor-routes.js
const express = require('express');
const router = express.Router();

const subcontractorController = require('../controllers/subcontractor-controller');

// Subcontractor routes
router.get('/subcontractors', subcontractorController.getAllSubcontractors);
router.get('/subcontractors/:id', subcontractorController.getSubcontractorById);
router.post('/subcontractors', subcontractorController.createSubcontractor);
router.put('/subcontractors/:id', subcontractorController.updateSubcontractor);
router.delete('/subcontractors/:id', subcontractorController.deleteSubcontractor);

module.exports = router;
