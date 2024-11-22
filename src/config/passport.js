//Module imports
import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

//File imports
import { config } from './config.js'

const KEY = config.jwtKey

export default function initializePassport(){

    passport.use('jwt', new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromExtractors([extractCookie]),
            secretOrKey: KEY           
        },
        async (jwt_payload, done) => {
            try {
                return done(null, jwt_payload)
            } catch (error) {
                return done(error)
            }
        }
    ))
}

function extractCookie(req){
    let token = null

    if (req && req.cookies) {
        token = req.cookies["sessiontoken"]
    }

    return token
}