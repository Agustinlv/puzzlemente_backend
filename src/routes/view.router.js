//Module imports
import { Router } from 'express'
import passport from 'passport'

//File imports
import * as viewController from '../controllers/view.controller.js'

const router = Router()

export default router
    .get('/', passport.authenticate('jwt', { session: false, failureRedirect: '/login' }), viewController.homePage)
    .get('/login', viewController.loginPage)
    .get('/register', viewController.registerPage)
    .get('/profile', viewController.profilePage)