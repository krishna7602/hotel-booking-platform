const User = require('../Models/user.model');


module.exports.createUser=async({name,email,password,adharcard,phone})=>{
    //console.log(name,email,password,adharcard,phone);

    if(!name || !email || !password || !adharcard || !phone){
        throw new Error('Please fill all the details');
    }

    const user = await User.create({name,email,password,adharcard,phone});
    await user.save();

    return user;
}