//File imports
import UserService from '../services/user.service.js'

const service = new UserService()

export const get = async (req, res) => {
    try{
        const response = await service.findAll()
        
        res.json({ success: true, data: response })
    } catch (error){
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export const getById = async (req, res) => {
    try{
        const { id } = req.params
        
        const response = await service.findById(id)
        
        res.json({ success: true, data: response })
    } catch (error){
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export const create = async (req, res) => {
    try {
        const { name , lastname, username, email, password } = req.body
        
        const response = await service.create(name , lastname, username, email, password)

        res.json({ success: true, data: response })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export const update = async (req, res) => {
    try{
        const { id } = req.params

        const body = req.body

        const response = await service.update(id, body)

        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}

export const _delete = async (req, res) => {
    try {
        const { id } = req.params

        const response = await service.delete(id)

        res.json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }

    res.end()
}