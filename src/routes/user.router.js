//Module imports
import { Router } from 'express'

//File imports
import * as userController from '../controllers/user.controller.js'
import * as userValidate from '../validators/user.validate.js'

const router = Router()

export default router
    .get('/', userController.get)
    .get('/id/:id', userController.getById)
    .get('/username/:username', userController.getByUsername)
    .post('/', userValidate.newUser, userController.create)
    .put('/:id', userController.update)
    .delete('/:id', userController._delete)