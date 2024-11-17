//Module imports
import jwt from 'jsonwebtoken'

//File imports
import { config } from '../config/config.js'

const KEY = config.jwtKey

export function generateToken(user){
    return jwt.sign({user}, KEY, {expiresIn: '1d'})
}