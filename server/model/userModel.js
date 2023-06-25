const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type :String,
        require : true
    }
})
userSchema.statics.signup = async function(email, password){
   
    if (!email || !password){
        throw Error('fill the space first')
    }
    const match = await this.findOne({email});

    if (match) {
        throw Error('user alrady exists')
    }
    if (!validator.isEmail(email)){
        throw Error('invalid email')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('use strong password')
    }

    const hashed = await bcrypt.hash(password, 10) 
    const user = await this.create({email, password: hashed}) 
    return  user;
}

userSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('user not found email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  
}
module.exports = mongoose.model('User', userSchema)