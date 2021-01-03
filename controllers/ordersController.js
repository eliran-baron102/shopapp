const con = require('../utils/databse');
const Orders = require('../models/ordersModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getOrders = async (req, res, next) => {
	await Orders.findAll()
		.then((Orders) => {
			res.send(SendMessage(Orders, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertOrders = async (req, res, next) => {
	let orders = req.body;

	await Orders.create(orders)
		.then((Orders) => {
			res.send(SendMessage(Orders, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.updateOrders = async (req, res, next) => {
	await Orders.update(req.body, {
		where: {
			id: req.body.id
		}
	})
		.then((Orders) => {
			res.send(SendMessage(Orders, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
exports.deleteOrder = async (req, res, next) => {
	let id = req.query.id;
	await Orders.destroy({
		where: {
			id: id
		}
	})
		.then((Orders) => {
			res.send(SendMessage(Orders, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
exports.findOrder = async (req, res, next) => {
	let orderid = req.query.orderid;
	await Orders.findAll({
		where: {
			orderid: {
				[Op.like]: `%${orderid}`
			}
		}
	})
		.then((User) => {
			res.send(SendMessage(User, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};