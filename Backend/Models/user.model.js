const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adharcard: {
        type: String,
        required: true
    },
      phone: {
        type: String,
        required: true
    },
    bookings: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Hotel'
        }
}, {
    timestamps: true
});


userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model('User', userSchema);
module.exports = User;