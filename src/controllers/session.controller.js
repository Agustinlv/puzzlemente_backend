//File imports
import SessionService from "../services/session.service.js"

const sessionService = new SessionService()

export async function login(req, res){
    try {
        const user = req.user
        const token = await sessionService.generateToken(user)

        res.cookie('sessiontoken', token, {httpOnly: true}).status(200).send({success: true, message: "You have successfully logged in"})
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export async function logout(req, res){
    return
}