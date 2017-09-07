const express = require('express')
const router = express.Router()

const addUser = require('./handlers/handlerAddUser')
const searchUsers = require('./handlers/handlerSearchUsers')
const removeUser = require('./handlers/handlerRemoveUser')
const updateUser = require('./handlers/handlerUpdateUser')
const getAllUsers = require('./handlers/handlerAllUsers')

router.get('/', getAllUsers)
// router.post('/', addUser)
router.put('/:_id', updateUser)
router.delete('/:_id', removeUser)
router.get('/search', searchUsers)

module.exports = router
