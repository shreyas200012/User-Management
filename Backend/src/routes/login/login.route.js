const express = require('express')
const loginRouter = express.Router();
const {Login}  = require('./login.controller')

loginRouter.post('/', Login)

module.exports = loginRouter