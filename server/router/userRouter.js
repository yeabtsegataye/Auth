const express = require('express');
const {handle_verify} = require('../middleware/requireAuth')

const Router = express.Router();
const { handle_login, handle_signup } = require('../controller/userController')

Router.post('/verify',handle_verify)
Router.post('/signup', handle_signup)

Router.post('/login', handle_login)


module.exports = Router;