const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/getCategories', categoryController.getCategories);

router.get('/getAllCategories', categoryController.getAllCategories);

router.post('/insertCategory', categoryController.insertCategory);

router.get('/deleteCategory', categoryController.deleteCategoty);

router.post('/updateCategory', categoryController.updateCategory);

module.exports = router;
