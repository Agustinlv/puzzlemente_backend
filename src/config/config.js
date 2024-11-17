//Module imports
import dotenv from 'dotenv'

dotenv.config()

export const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 8080,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASS,
    dbHost: process.env.DB_HOST || 'localhost',
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT || 3306,
    jwtKey: process.env.JWT_KEY
}