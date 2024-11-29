//Module imports
import jwt from 'jsonwebtoken'

//File imports
import { config } from '../config/config.js'

const KEY = config.jwtKey

export function generateToken(id, email, userlevel_id){
    return jwt.sign({userid: id, useremail: email, userlevel: userlevel_id}, KEY, {expiresIn: '1d'})
}

export function verifyToken(token){
    return jwt.verify(token, KEY)
}