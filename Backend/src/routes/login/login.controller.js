const Response = require('../../constants/Response')
const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

async function Login(req,res){
    try{
        const {emailId, password} = req.body
        const user = await User.findOne({emailId})

        if(!emailId || !password){
            const response = new Response(false, null, 'Both email and password are required');
            return res.status(400).json(response)
        }

        if(!user){
            const response = new Response(false, null, 'User not found');
            return res.status(400).json(response)
        }

        if(password !== user.password){
            const response = new Response(false, null, 'Password does not match');
            return res.status(400).json(response)
        }

        let payload = {
            userId: user._id,
            email: user.emailId
        }

        // if the email and password are valid, generate a JWT token
        const token = jwt.sign(payload, `${secretKey}`, {
            expiresIn: '1h'
        }
        )

        //Return the token in the response
        const response = new Response(true, {token,user}, 'Login successful');
        res.status(200).json(response)
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}

module.exports = {Login}