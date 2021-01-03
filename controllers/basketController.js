const con = require('../utils/databse');
const Basket = require('../models/basketModel');
const User = require('../models/userModels');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getBasket = async (req, res, next) => {
	// let id = req.query.id;
	await Basket.findAll()
		.then((Basket) => {
			res.send(SendMessage(Basket, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertBasket = async (req, res, next) => {
	let basket = req.body;
	await Basket.create(basket)
		.then((Basket) => {
			res.send(SendMessage(Basket, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.deleteBasket = async (req, res, next) => {
	let id = req.query.id;

	await Basket.destroy({
		where: {
			id: id
		}
	})
		.then((Basket) => {
			res.send(SendMessage(Basket, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
exports.findBasketUser = async (req, res, next) => {
	let cid = req.query.cid;
	await Basket.findAll({
		where: {
			cid: {
				[Op.like]: `%${cid}`
			}
		}
	})
		.then((Basket) => {
			res.send(SendMessage(Basket, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
