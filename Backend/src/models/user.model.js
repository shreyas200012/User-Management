

const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    emailId: {
        type: String,
        required:true,
        unique: true,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    role: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User


