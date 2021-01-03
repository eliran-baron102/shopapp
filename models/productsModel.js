const Sequelize = require('sequelize');
const sequelize = require('../utils/databse');
const Products = sequelize.define('products', {
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
	old_price: {
		type: Sequelize.STRING,
		allowNull: false
	},
	new_price: {
		type: Sequelize.STRING,
		allowNull: true
	},
	img: {
		type: Sequelize.STRING,
		allowNull: false
	},
	qnt: {
		type: Sequelize.STRING,
		allowNull: false
	},
	categoryId: {
		type: Sequelize.INTEGER(11),
		allowNull: false
	},
	description: {
		type: Sequelize.INTEGER(11),
		allowNull: true
	},
	onsale: {
		type: Sequelize.INTEGER(11),
		allowNull: false
	}
});
module.exports = Products;
