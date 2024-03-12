import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../database';
import sequelize  from '../db';

class Patient extends Model {
    public id!: number;
    public branch_id!: number;
    public patient_id!: string;
    public mobile_number!: string;
}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        patient_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        tableName: 'patients',
        sequelize, // Pass the sequelize connection instance
    }
);



export default Patient;