import {Sequelize, DataTypes, Model} from 'sequelize';
import sequelize from '../db';

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER,
    	allowNull: false,
		primaryKey: true,
	},
	emp_id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
    	allowNull: false,
	},
	department: {
		type: DataTypes.STRING,
		allowNull: false
	},
	location: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	tableName: 'app_users'
})


export default User;

