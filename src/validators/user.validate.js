//File imports
import UserService from '../services/user.service.js'

const service = new UserService()

export async function newUser(req, res, next) {
    const { username, email } = req.body

    const existingEmail = await service.findByEmail(email)

    if (existingEmail) {
        return res.status(403).send({status: "Error", message: "Ese email ya está en uso"})
    }

    const existingUsername = await service.findByUsername(username)

    if (existingUsername) {
        return res.status(403).send({status: "Error", message: "Ese nombre de usuario ya está en uso"})
    }

    next()
}

export async function userUpdate(req, res, next){
    const { id } = req.params
    const { name, lastname, email } = req.body

    next()
}