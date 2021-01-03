const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const User = sequelize.define('user', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
    name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	flour: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cid: {
		type: Sequelize.STRING,
		allowNull: false
	},
	notes: {
		type: Sequelize.STRING,
		allowNull: true
	},
});
module.exports = User;
