const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const workoutModel = new Schema({
    title: {
        type : String,
        requierd : true
    },
    body: {
        type : String,
        requierd : true
    },
    reps: {
        type : Number,
        requierd : true
    },
    userName: {
        type : String,
        requierd : true
    }
},{timestamps: true})
module.exports = mongoose.model('workout', workoutModel)