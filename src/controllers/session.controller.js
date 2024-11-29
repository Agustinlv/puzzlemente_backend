//File imports
import SessionService from "../services/session.service.js"

const sessionService = new SessionService()

export async function login(req, res){
    try {
        const user = req.user
        const { id, email, userlevel_id } = user
        const token = sessionService.generateToken(id, email, userlevel_id)

        res.cookie('jwt', token, {httpOnly: true}).status(200).send({success: true, message: "You have successfully logged in", token})
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export async function verifyToken (req, res){
    try {
        const { token } = req.body

        const decodedToken = sessionService.verifyToken(token)

        if (decodedToken) {
            res.status(200).send({success: true, userlevel: decodedToken.userlevel, message: 'This is a valid token'})
        } else {
            res.status(403).send({success: false, userlevel: 0, message: 'This is not a valid token'})
        }
        
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export async function logout(req, res){
    res.clearCookie('jwt')

    res.end()
}