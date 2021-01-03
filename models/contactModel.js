const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Contact = sequelize.define('contact', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	mail: {
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	message: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
module.exports = Contact;
