const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/', applicationController.create);
router.get('/', applicationController.findAll);
router.get('/:applicationId', applicationController.findById);
router.put('/:applicationId', applicationController.update);
router.delete('/:applicationId', applicationController.delete);

module.exports = router;
