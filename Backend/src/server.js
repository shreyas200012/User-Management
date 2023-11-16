require('dotenv').config()
const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const PORT = process.env.PORT ;
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI;


async function createServer(){
    server.listen(PORT, () => {
        console.log(`server connected to port on ${PORT}`)
    })

    await mongoose.connect(mongoURI, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))
}

createServer()