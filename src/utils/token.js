//Module imports
import jwt from 'jsonwebtoken'

//File imports
import { config } from '../config/config.js'

const KEY = config.jwtKey

export function generateToken(userData){
    return jwt.sign(userData, KEY, {expiresIn: '1d'})
}

export function verifyToken(token){
    return jwt.verify(token, KEY)
}