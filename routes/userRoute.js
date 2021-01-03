const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/findUser', userController.findUserByUserName);

router.post('/insertUser', userController.insertUser);
router.get('/getAllUser', userController.getAllUser)
router.get('/findUser', userController.findUserByName);
module.exports = router;
