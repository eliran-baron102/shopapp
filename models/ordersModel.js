const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Orders = sequelize.define('orders', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	cid:{
		type: Sequelize.STRING,
		allowNull: false
	},
	orderid:{
		type: Sequelize.STRING,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	notes: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER(11),
		allowNull: false
	},
	prodact: {
		type: Sequelize.STRING,
		allowNull: false
	},
	amount: {
		type: Sequelize.STRING,
		allowNull: false
	},
	unit: {
		type: Sequelize.STRING,
		allowNull: false
	},

});
module.exports = Orders;
