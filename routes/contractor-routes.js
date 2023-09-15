// routes/contractor-routes.js
const express = require('express');
const router = express.Router();

const contractorController = require('../controllers/contractor-controller');

// Contractor routes
router.get('/contractors', contractorController.getAllContractors);
router.get('/contractors/:id', contractorController.getContractorById);
router.post('/contractors', contractorController.createContractor);
router.put('/contractors/:id', contractorController.updateContractor);
router.delete('/contractors/:id', contractorController.deleteContractor);

module.exports = router;
