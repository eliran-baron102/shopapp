const con = require('../utils/databse');
const Products = require('../models/productsModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getAllProducts = async (req, res, next) => {
	await Products.findAll()
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getSingleProduct = async (req, res, next) => {
	let id = req.query.id;

	await Products.findAll({
		where: {
			id: id
		}
	})
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getProductsByCatId = async (req, res, next) => {
	let Catid = req.query.Catid;

	await Products.findAll({
		where: {
			categoryId: Catid
		}
	})
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertProduct = async (req, res, next) => {
	let product = req.body;
	product.img = req.files[0].filename;
	await Products.create(product)
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.findProductByName = async (req, res, next) => {
	let name = req.query.name;
	await Products.findAll({
		where: {
			name: {
				[Op.like]: `%${name}%`
			}
		}
	})
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.deleteProduct = async (req, res, next) => {
	let id = req.query.id;

	await Products.destroy({
		where: {
			id: id
		}
	})
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.updateProduct = async (req, res, next) => {
	await Products.update(req.body, {
		where: {
			id: Number(req.body.id)
		}
	})
		.then((Products) => {
			res.send(SendMessage(Products, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
