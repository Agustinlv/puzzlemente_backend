//Module imports
import { Sequelize } from 'sequelize'

//File imports
import { config } from '../config/config.js'

export const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'mysql'
    }
)