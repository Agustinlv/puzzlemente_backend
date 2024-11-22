//Module imports
import express from 'express'
import cors from 'cors'
import passport from 'passport'
import cookieParser from 'cookie-parser'

//File imports
import { config } from './config/config.js'
import { __dirname } from './utils/dirname.js'
import initializePassport from './config/passport.js'
import userRouter from './routes/user.router.js'
import sessionRouter from './routes/session.router.js'
import viewRouter from './routes/view.router.js'

const app = express()

const PORT = config.port;

app.use(cors())

app.disable("x-powered-by")

app.use(express.json())

app.use(cookieParser())

app.use(passport.initialize())

initializePassport()

app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.use('/api/user', userRouter)

app.use('/api/session', sessionRouter)

app.get('/', viewRouter)

app.listen(PORT,()=>{
    console.log("App listening on port: ", PORT)
})