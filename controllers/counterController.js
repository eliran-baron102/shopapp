const con = require('../utils/databse');
const Counter = require('../models/userCounterModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getCounter = async (req, res, next) => {
	await Counter.findAll()
		.then((Counter) => {
			res.send(SendMessage(Counter, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertCounter = async (req, res, next) => {
	let counter = req.body;
	await Counter.create(counter)
		.then((Counter) => {
			res.send(SendMessage(Counter, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.updateCounter = async (req, res, next) => {
	await Counter.update(req.body, {
		where: {
			id: req.body.id
		}
	})
		.then((Counter) => {
			res.send(SendMessage(Counter, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
