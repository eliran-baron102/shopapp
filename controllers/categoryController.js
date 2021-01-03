const con = require('../utils/databse');
const Category = require('../models/categoryModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getCategories = async (req, res, next) => {
	let id = req.query.id;

	await Category.findAll({
		where: {
			id: id
		}
	})
		.then((Category) => {
			res.send(SendMessage(Category, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getAllCategories = async (req, res, next) => {
	await Category.findAll()
		.then((Category) => {
			res.send(SendMessage(Category, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertCategory = async (req, res, next) => {
	let category = req.body;

	await Category.create(category)
		.then((Category) => {
			res.send(SendMessage(Category, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.deleteCategoty = async (req, res, next) => {
	let id = req.query.id;

	await Category.destroy({
		where: {
			id: id
		}
	})
		.then((Category) => {
			res.send(SendMessage(Category, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.updateCategory = async (req, res, next) => {
	await Category.update(req.body, {
		where: {
			id: req.body.id
		}
	})
		.then((Category) => {
			res.send(SendMessage(Category, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
