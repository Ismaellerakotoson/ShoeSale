const express = require('express');
const router = express.Router();
const userController = require('../controllers/fakeUserController');

router.post('/users', userController.createFakeUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
