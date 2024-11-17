//Module imports
import express from 'express'
import cors from 'cors'

//File imports
import { config } from './config/config.js'
import { __dirname } from './utils/dirname.js'
import userRouter from './routes/user.router.js'
import sessionRouter from './routes/session.router.js'

const app = express()

const PORT = config.port;

app.use(cors())

app.disable("x-powered-by")

app.use(express.json())

//Lalala

app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
    res.send('Backend de Puzzlemente en desarrollo...')
})

app.use('/user', userRouter)

app.use('/session', sessionRouter)

app.listen(PORT,()=>{
    console.log("App listening on port: ", PORT)
})