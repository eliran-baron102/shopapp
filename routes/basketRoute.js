const express = require('express');
const router = express.Router();
const basketController = require('../controllers/basketController')

router.get('/getBasket', basketController.getBasket);

router.get('/findBasketUser', basketController.findBasketUser)

router.post('/insertBasket', basketController.insertBasket);

router.get('/deleteBasket', basketController.deleteBasket);


module.exports = router;