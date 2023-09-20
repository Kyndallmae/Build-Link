const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/', messageController.create);
router.get('/', messageController.findAll);
router.get('/:messageId', messageController.findById);
router.put('/:messageId', messageController.update);
router.delete('/:messageId', messageController.delete);

module.exports = router;
