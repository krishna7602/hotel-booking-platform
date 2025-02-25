const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const Usercontroller = require('../controllers/user.controller');




router.post('/register',[body('email').isEmail(),body('password').isLength({min:6})],Usercontroller.registerUser);

router.post('/login', 
    [body('email').isEmail().withMessage('Invalid email'),body('password').isLength({min:6}).withMessage('Password should be at least 6 characters long')], Usercontroller.loginUser

);


module.exports = router;