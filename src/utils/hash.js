//Module imports
import argon2 from 'argon2'

export async function hashPassword(password){
    try {
        const hashedPassword = await argon2.hash(password)

        return hashedPassword
    } catch (error) {
        console.log(error.message)
    }
}

export async function isValidHash(password, storedHash){
    try {
        if(await argon2.verify(storedHash, password)){
            return true
        } else {
            return false
        }
    } catch(error) {
        console.log(error.message)
    }
}