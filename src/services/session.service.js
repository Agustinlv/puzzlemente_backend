//File imports
import { generateToken, verifyToken } from '../utils/token.js'

export default class SessionService{
    constructor(){}

    generateToken(id, email, userlevel){
        return generateToken(id, email, userlevel)
    }

    verifyToken(token){
        return verifyToken(token)
    }
}