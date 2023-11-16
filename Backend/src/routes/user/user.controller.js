const User = require('./../../models/user.model')
const Response = require('../../constants/Response')
const SuccessMessages = require('../../constants/SuccessMessages')
const ErrorMessages = require('../../constants/ErrorMessages')

async function addUser(req,res){ 
    try{
        const data = req.body;
        const {userName, emailId, password, dateOfBirth, role, status} = data

        if(!userName || !emailId || !password || !dateOfBirth || !role || !status){
            const response = new Response(false,null ,ErrorMessages.NULL_EXCEPTION);
            return res.status(400).json(response)
        }

        //Create a new user instance
        const newUser = new User({
            userName,
            emailId,
            password,
            dateOfBirth,
            role,
            status
        })

        //Save the new User to the database
        const savedUser = await newUser.save();
        const response = new Response(true,savedUser,SuccessMessages.SUCCESSFULLY_CREATED)
        return res.status(201).json(response)
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}


async function getUserById(req,res){
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user){
            const response = new Response(false, null, ErrorMessages.USER_NOT_FOUND)
            return res.status(400).json(response)
        }
        const response = new Response(true, user, SuccessMessages.SUCCESSFULLY_RETRIEVED)
        return res.status(200).json(response)
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}


async function updateUser(req,res){
    try{
        const userId =  req.params.id;
        const updatedData = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId,updatedData, {new: true});

        if(!updatedUser){
            const response = new Response(false, null, ErrorMessages.USER_NOT_FOUND)
            return res.status(404).json(response)
        }

        const response = new Response(true, updateUser, SuccessMessages.SUCCESSFULLY_UPDATED)
        return res.status(201).json(response)
    }
    catch(err){
        const response = new Response(false,null, err)
        return res.status(500).json(response)
    }
}


async function deleteUser(req,res){
    try{
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndRemove(userId);

        if(!deletedUser){
            const response = new Response(false, null, ErrorMessages.USER_NOT_FOUND)
            return res.status(404).json(response)
        }
        const response = new Response(true, deleteUser, SuccessMessages.SUCCESSFULLY_DELETED)
        return res.status(200).json(response)
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}


async function getAllUsers(req,res){
    try{
        let exist = await User.findById(req.userId);
        if(!exist){
            const response = new Response(false, null, ErrorMessages.USER_NOT_FOUND)
            return res.status(400).json(response)
        }
        const users = await User.find();
        const response = new Response(true, users,SuccessMessages.SUCCESSFULLY_RETRIEVED)
        return res.status(200).json(response)
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}


module.exports = {addUser, getUserById, updateUser, deleteUser, getAllUsers}