const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');

const City = sequelize.define('city', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
module.exports = City;
