//Module imports
import { Router } from 'express'

//File imports
import * as sessionController from '../controllers/session.controller.js'
import * as sessionValidate from '../validators/session.validate.js'

const router = Router()

export default router
    .post('/login', sessionValidate.login, sessionController.login)
    .post('/auth', sessionController.verifyToken)
    .get('/logout', sessionController.logout)