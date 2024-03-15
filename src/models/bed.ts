import { Model, DataTypes } from 'sequelize';
import sequelize  from '../db';

// Generate a bed class having following fields
// 1.   id - integer, primary key, auto increment
// 2.   room_id - integer
// 3.   bed_number - string
// 4.   status - enum with value as either Active or Inactive
// 5.   created_at - timestamp
// 6.   updated_at - timestamp

class Bed extends Model {
    public id!: number;
    public room_id!: number;
    public bed_number!: string;
    public status!: 'Active' | 'Inactive';
    public created_at!: Date;
    public updated_at!: Date;
}

Bed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bed_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'master_beds',
        timestamps: false,
    }
);

export default Bed;