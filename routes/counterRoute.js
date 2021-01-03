const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counterController');

router.get('/getCounter', counterController.getCounter);

router.post('/insertCounter', counterController.insertCounter);

router.post('/updateCounter', counterController.updateCounter);

module.exports = router;
