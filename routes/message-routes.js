// routes/message-routes.js
const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message-controller');

// Message routes
router.get('/messages', messageController.getAllMessages);
router.get('/messages/:id', messageController.getMessageById);
router.post('/messages', messageController.createMessage);
router.put('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;
