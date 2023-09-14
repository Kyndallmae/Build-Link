// user-routes.js
const express = require('express');
const router = express.Router();

const userController = require('./controllers/user-controller');

// User routes
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
