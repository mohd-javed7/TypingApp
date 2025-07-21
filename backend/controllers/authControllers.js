const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//signUp controller
exports.signup = async (req, res) =>{
    try{
        const {username,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({username,email,password: hashedPassword});
        await user.save();
        res.status(201).json({message: "User created successfully."});
    }catch(err){
        if(err===11000){
            return res.status(400).json({message: "Username or email already exits"});
        }
        res.status(500).json({message:"Server Error"});
    }
};

//login controller
exports.login = async(req,res)=>{
    try{
        const {email,password}= req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid Credentials"});
        }

         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
         res.status(200).json({ token, username: user.username });

    }catch(err){
        res.status(500).json({ message: 'Server error' });

    }
};