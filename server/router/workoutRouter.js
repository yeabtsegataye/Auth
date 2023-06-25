const express = require('express')
const {
    handle_getAll,
    handle_getUnice,
    handle_create,
    handle_delete
} = require('../controller/workoutController')
const {handle_verify} = require('../middleware/requireAuth')
const Router = express.Router();

// Router.use(requireAuth)

Router.use(handle_verify)
Router.get('/',handle_getAll)


Router.get('/:username',handle_getUnice)

Router.post('/', handle_create)

Router.delete('/:username',handle_delete)

module.exports = Router