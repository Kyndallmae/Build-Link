const express = require('express');
const router = express.Router();
const subcontractorController = require('../controllers/subcontractorController');

router.post('/', subcontractorController.create);
router.get('/', subcontractorController.findAll);
router.get('/:subcontractorId', subcontractorController.findById);
router.put('/:subcontractorId', subcontractorController.update);
router.delete('/:subcontractorId', subcontractorController.delete);

module.exports = router;
