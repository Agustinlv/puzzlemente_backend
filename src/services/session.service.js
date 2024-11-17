//File imports
import { generateToken } from "../utils/token.js"

export default class SessionService{
    constructor(){

    }

    async generateToken(user){
        const token = generateToken(user)

        return token
    }
}