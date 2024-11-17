//File imports
import { sequelize } from '../libs/sequelize.js'
import { hashPassword } from '../utils/hash.js'
import { User, UserSchema } from '../db/models/user.model.js'

User.init(UserSchema, User.config(sequelize))

export default class UserService{

    constructor(){

    }

    async findAll(){
        const res = await User.findAll()

        return res
    }

    async findById(id){
        const res = await User.findByPk(id)

        return res
    }

    async findByUsername(username){
        const res = await User.findOne({ where: { username: username}})

        return res
    }

    async findByEmail(email){
        const res = await User.findOne({ where: { email: email}})

        return res
    }

    async create(name , lastname, username, email, password){
        const hashedPassword = await hashPassword(password)

        const userData = { name , lastname, username, email, password: hashedPassword}

        const res = await User.create(userData)

        return res
    }

    async update(id, data){
        const model = await this.findById(id)

        //Sólo paso los datos actualizables por este medio. La actualización o reseteo de claves se maneja de otra forma
        const newData = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
        }

        const res = await model.update(newData)

        return res
    }

    async delete(id){
        const model = await this.findOne(id)

        await model.destroy()

        return {deleted: true}
    }
}