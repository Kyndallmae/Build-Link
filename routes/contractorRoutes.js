const express = require('express');
const router = express.Router();
const contractorController = require('../controllers/contractorController');

router.post('/', contractorController.create);
router.get('/', contractorController.findAll);
router.get('/:contractorId', contractorController.findById);
router.put('/:contractorId', contractorController.update);
router.delete('/:contractorId', contractorController.delete);

module.exports = router;
