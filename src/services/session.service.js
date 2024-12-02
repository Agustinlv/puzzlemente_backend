//File imports
import { generateToken, verifyToken } from '../utils/token.js'

export default class SessionService{
    constructor(){}

    generateToken(userData){
        return generateToken(userData)
    }

    verifyToken(token){
        return verifyToken(token)
    }
}