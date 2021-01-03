const con = require('../utils/databse');
const Manager = require('../models/managerModels');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.findManagerByUserName = async (req, res, next) => {
	let username = req.query.username;
	let password = req.query.password;

	await Manager.findAll({
		where: {
			username: {
				[Op.like]: `%${username}`
			},
			password: {
				[Op.like]: `%${password}`
			}
		}
	})
		.then((Manager) => {
			res.send(SendMessage(Manager, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.inserManager = async (req, res, next) => {
	let manager = req.body;

	await Manager.create(manager)
		.then((Manager) => {
			res.send(SendMessage(Manager, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getAllManager = async (req, res, next) => {
	await Manager.findAll()
		.then((Manager) => {
			res.send(SendMessage(Manager, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
