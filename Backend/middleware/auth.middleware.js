const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');
const UserServices = require('../services/user.services');


module.exports.authUser= async (req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];

    console.log(token)
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }


    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await User.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user=user;
        next();
    } catch (error) {
        console.log("error in auth user",error.message);
    }

}
