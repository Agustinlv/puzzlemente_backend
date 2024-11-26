//File imports
import { validateHash } from '../utils/hash.js'
import UserService from '../services/user.service.js'

const service = new UserService()

export async function login(req, res, next){
    const { username, password } = req.body

    const user = await service.findByUsername(username)

    if (!user) {
        return res.status(403).send({status: "Error", message: "Credenciales incorrectas"})
    }

    const storedHash = user.password

    const isValidHash = await validateHash(storedHash, password)

    if (!isValidHash) {
        return res.status(403).send({status: "Error", message: "Credenciales incorrectas"})
    }

    //Si el username y el password con correctos, entonces ya cargo los datos del user en req.user, así no ejecuto dos veces el mismo query para obtener los datos del usuario
    req.user = user

    next()
}