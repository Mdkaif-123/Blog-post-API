const mongoose = require('mongoose');


// USER SCHEMA 
const userSchema = new mongoose.Schema({
    
    userName : {
        type : String,
        require : true,
        unique : true
    },

    password :{
        type : String,
        require : true,
    },

    phone_no : Number,
    email : String
});


// USER MODEL 

const User = mongoose.model('User', userSchema );


module.exports = User;

