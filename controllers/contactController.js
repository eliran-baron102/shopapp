const con = require('../utils/databse');
const Contact = require('../models/contactModel');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const SendMessage = require('../utils/returnObToClient');

exports.getContacts = async (req, res, next) => {
	await Contact.findAll()
		.then((Contact) => {
			res.send(SendMessage(Contact, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.insertContact = async (req, res, next) => {
	let contact = req.body;
	await Contact.create(contact)
		.then((Contact) => {
			res.send(SendMessage(Contact, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};

exports.deleteContact = async (req, res, next) => {
	let id = req.query.id;

	await Contact.destroy({
		where: {
			id: id
		}
	})
		.then((Contact) => {
			res.send(SendMessage(Contact, null, 1));
		})
		.catch((err) => {
			res.send(SendMessage(null, err, 0));
		});
};
