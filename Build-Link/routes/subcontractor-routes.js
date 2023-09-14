// contractor-routes.js
const express = require('express');
const router = express.Router();

const contractorController = require('./controllers/contractor-controller');

// Contractor routes
router.get('/contractors', contractorController.getAll);
router.get('/contractors/:id', contractorController.getOne);
router.post('/contractors', contractorController.create);
router.put('/contractors/:id', contractorController.update);
router.delete('/contractors/:id', contractorController.delete);

module.exports = router;
