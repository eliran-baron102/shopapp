const con = require('../utils/databse');
const City = require('../models/cityModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getCitys = async (req, res, next) => {
	let id = req.query.id;

	await City.findAll({
		where: {
			id: id
		}
	})
		.then((City) => {
			res.send(SendMessage(City, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.getAllCitys = async (req, res, next) => {
	await City.findAll()
		.then((City) => {
			res.send(SendMessage(City, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
