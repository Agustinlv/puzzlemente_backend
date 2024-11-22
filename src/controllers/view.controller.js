export async function homePage(req, res) {
    return res.status(200).send({success: true, message: 'Home'})
}

export async function loginPage(req, res) {
    return res.status(200).send({success: true, message: 'Login'})
}

export async function registerPage(req, res) {
    return res.status(200).send({success: true, message: 'Register'})
}

export async function profilePage(req, res) {
    return res.status(200).send({success: true, message: 'Profile'})
}