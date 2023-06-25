require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/userRouter');
const workoutRouter = require('./router/workoutRouter')


const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    // listen for requests
    app.listen(process.env.PROXY, () => {
      console.log('connected to db & listening on port', process.env.PROXY)
    })
  })
  .catch((error) => {
    console.log(error)
  })
// 
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/user', userRouter)
app.use('/api/workout', workoutRouter)
