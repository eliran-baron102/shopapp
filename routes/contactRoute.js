const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/getContact', contactController.getContacts);

router.post('/insertContact', contactController.insertContact);

router.get('/deleteContact', contactController.deleteContact);

module.exports = router;
