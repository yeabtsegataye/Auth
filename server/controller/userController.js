const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const tokens = (id)=>{
    return jwt.sign({id}, process.env.SECRET,{expiresIn: '3d'})
}

const handle_signup = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.signup(email, password) 

        const token = tokens(user._id)
        res.status(200).json({email, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}
const handle_login = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password) 
        const token = tokens(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}
module.exports = {
    handle_login,
    handle_signup
}