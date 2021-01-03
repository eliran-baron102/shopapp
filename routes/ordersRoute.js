const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController')

router.get('/getOrders', ordersController.getOrders);

router.post('/insertOrders', ordersController.insertOrders);

router.post('/updateOrders', ordersController.updateOrders);

router.get('/deleteOrder', ordersController.deleteOrder);
router.get('/findOrder', ordersController.findOrder);

module.exports = router;
