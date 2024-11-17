//File imports
import SessionService from "../services/session.service.js"
import UserService from '../services/user.service.js'

const sessionService = new SessionService()
const userService = new UserService()

export async function login(req, res){
    try {
        const { username } = req.body
        const response = await userService.findByUsername(username)
        //const token = await sessionService.generateToken(user)

        //req.user = user

        res.cookie('jwt', token, {httpOnly: true}).send({success: true, message: "You have successfully logged in"})
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}