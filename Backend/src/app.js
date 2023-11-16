require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();
const userRouter = require('./routes/user/user.route')
const loginRouter = require('./routes/login/login.route')
const LoginMiddleware = require('./middlewares/LoginMiddleware')

app.use(express.json())
app.use(cors({
    origin:'*'
}))


app.use('/user', LoginMiddleware,  userRouter)
app.use('/login', loginRouter)

module.exports = app