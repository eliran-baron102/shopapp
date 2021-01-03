const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Basket = sequelize.define('basket', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	debt: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cid: {
		type: Sequelize.STRING,
		allowNull: false
	},
	payid: {
		type: Sequelize.STRING,
		allowNull: false
	},
	date: {
		type: Sequelize.STRING,
		allowNull: false
	},
	note: {
		type: Sequelize.STRING,
		allowNull: true
	}

});
module.exports = Basket;
