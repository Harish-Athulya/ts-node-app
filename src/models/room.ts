import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

// Define a room class with fields branch_id - number, room_number - string, floor - number, room_type_id - number, created_at - timestamp, updated_at - timestamp 


class Room extends Model {
    id!: number;
    branch_id?: number;
    room_number?: string;
    floor?: number;
    room_type_id?: number;
    // created_at!: Date;
    // updated_at!: Date;

    static initialize(sequelize: any) {
        this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                branch_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                room_number: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                floor: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                room_type_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
/*                 created_at: {
                    type: DataTypes.DATE,
                    allowNull: false
                },
                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: false
                } */
            },
            {
                sequelize,
                modelName: 'Room',
                tableName: 'master_rooms'
            }
        );
    }
}

export default Room;