const User = require('../Models/user.model');
const {validationResult} = require('express-validator');
const Userservice = require('../services/user.services');
const cookieParser = require('cookie-parser');

module.exports.registerUser=async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name,email,password,adharcard,phone} = req.body;
    //console.log(name,email,password,adharcard,phone);
    try{
        const existinguser = await User.findOne({email});
        if(existinguser){
            return res.status(400).json({msg:'User already exists'});
        }
        const hashPassword = await User.hashPassword(password);
        console.log(password);
        const user = await Userservice.createUser({name,email,password:hashPassword,adharcard,phone});
        const token = await user.generateAuthToken();
        console.log(token);
        console.log(user);
        res.status(200).json({user,token});
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
}

module.exports.loginUser=async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:'User does not exist'});
        }
        const isValid = await user.comparePassword(password);
        if(!isValid){
            return res.status(400).json({msg:'Invalid credentials'});
        }
        const token = await user.generateAuthToken();
        res.cookie('token',token);

        res.status(200).json({user,token});
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
}