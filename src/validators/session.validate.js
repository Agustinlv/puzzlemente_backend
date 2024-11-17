//File imports
import { isValidHash } from "../utils/hash.js"
import UserService from '../services/user.service.js'

const service = new UserService()

export async function credentials(req, res, next){
    const { username, password } = req.body

    const response = await service.findByUsername(username)

    console.log(response)

    // if (!isValidHash(password, storedHash)){
    //     return res.status(403).send({status: "Error", message: "Credenciales incorrectas"})
    // }

    next()
}