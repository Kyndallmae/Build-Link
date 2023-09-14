const express = require('express');
const router = express.Router();
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', ApplicationsController.getAllApplications);
router.get('/:id', ApplicationsController.getApplicationById);
router.post('/', ApplicationsController.createApplication);
router.put('/:id', ApplicationsController.updateApplication);
router.delete('/:id', ApplicationsController.deleteApplication);

module.exports = router;
