const User = require('../../models/user.model')
const express = require('express')
const userRouter = express.Router();
const {addUser, getAllUsers, deleteUser, getUserById,  updateUser} = require('./user.controller')

userRouter.post('/addUser', addUser )
userRouter.get('/getAllUsers',getAllUsers)
userRouter.get('/getUserById/:id', getUserById)
userRouter.put('/updateUser/:id', updateUser)
userRouter.delete('/deleteUser/:id', deleteUser)

module.exports = userRouter