//File imports
import SessionService from "../services/session.service.js"

const sessionService = new SessionService()

export async function login(req, res){
    try {
        const user = req.user
        
        const { id, email, role, name, lastname, username } = user
        
        const userData = {
            id: id,
            email: email,
            role: role,
            name: name,
            lastname: lastname,
            username: username
        }

        const token = sessionService.generateToken(userData)

        res.cookie('jwt', token, {httpOnly: true}).status(200).send({success: true, message: "You have successfully logged in", token: token, name: name, lastname: lastname, username: username, role: role})
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export async function validateToken (req, res){
    try {
        const { token } = req.body

        const { name, lastname, username, role } = sessionService.verifyToken(token)

        if (username) {
            res.status(200).send({success: true, message: 'The token is valid', name: name, lastname: lastname, username: username, role: role})
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