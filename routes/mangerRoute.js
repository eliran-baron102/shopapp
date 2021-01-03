const express = require('express');
const router = express.Router();
const mangerController = require('../controllers/managerController');

router.get('/findManager', mangerController.findManagerByUserName);
router.get('/getManager',mangerController.getAllManager);

router.post('/insertManager', mangerController.inserManager);

module.exports = router;
