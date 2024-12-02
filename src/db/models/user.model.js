//Module imports
import { Model, DataTypes } from 'sequelize'

export class User extends Model {
    static config(sequelize){
        return{
            sequelize,
            tableName: 'users',
            modelName: 'User',
            timestamps: true
        }
    }
}

export const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'lastname'
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'username'
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    role:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'role'
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password'
    }
}