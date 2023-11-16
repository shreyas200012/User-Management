const Response = require('../constants/Response')
const jwt = require('jsonwebtoken')
const ErrorMessages = require('../constants/ErrorMessages')
const secretKey = process.env.SECRET_KEY

module.exports = function(req,res, next){
    try{
        let token = req.header('x-token')
        if(!token){
            const response = new Response(false,null, ErrorMessages.TOKEN_NOT_FOUND);
            return res.status(400).json(response)
        }
        let decode = jwt.verify(token,`${secretKey}`);
        req.email = decode.email 
        req.userId = decode.userId
        next();
    }
    catch(err){
        const response = new Response(false, null, err)
        return res.status(500).json(response)
    }
}