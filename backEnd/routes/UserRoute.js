const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


router.post('/addUser', userController.createUser);
router.delete('/deleteUser/:idUser', userController.deleteUser);


module.exports = router;
