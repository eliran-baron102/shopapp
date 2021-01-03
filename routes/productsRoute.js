const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
var multer = require('multer');

var storageObj = multer.diskStorage({
	// destination
	destination: function(req, file, cb) {
		cb(null, '../uploads/');
	},
	filename: function(req, file, cb) {
		let dt = new Date().getTime();
		cb(null, String(dt) + file.originalname);
	}
});

var upload = multer({ storage: storageObj });

router.get('/getSingleProduct', productsController.getSingleProduct);

router.get('/getAllProducts', productsController.getAllProducts);

router.get('/getRelatedProducts', productsController.getProductsByCatId);

router.post('/insertProduct', upload.array('img[]', 12), productsController.insertProduct);

router.get('/deleteProduct', productsController.deleteProduct);

router.post('/updateProduct', productsController.updateProduct);

router.get('/findProduct', productsController.findProductByName);
module.exports = router;
