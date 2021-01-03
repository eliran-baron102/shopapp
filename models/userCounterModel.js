const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const Counter = sequelize.define('counter', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	counter: {
		type: Sequelize.INTEGER(11),
		allowNull: false
	}
});
module.exports = Counter;
