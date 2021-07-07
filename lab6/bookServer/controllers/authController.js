const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = "kisanet";

exports.login=(req, res, next)=>{
    const us = req.body;
    const user = new User(us.username, us.password, null).login();
    if(user){
        const accessToken = jwt.sign({username: user.username, role: user.role},secret);
        res.json({accessToken});
    } else {
        res.status(200).json({error: 'username or password is not valid'});
    } 
}

exports.authorize = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verufy(token,secret,(err, user) => {
            if(err){
                return res.status(403).json({'error' : 'forbidden'})
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({'error' : 'unauthorized'})
    }

}

exports.authorizeAdmin = (req,res,next) => {
    if(req.user.role == 'admin'){
        next();
    } else{
        return res.status(403).json({'error' : 'forbidden'})
    }

}