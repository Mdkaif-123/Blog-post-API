const express = require('express');
const mongoose = require('mongoose');
const user = require('../Models/user');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

// USER CREATE ROUTING
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', (req, res) => {

    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            console.log(err);
        } else {
            const pass = hash;
            const newUser = new user({
                userName: req.body.userName,
                password: hash,
                phone_no: req.body.phone_no,
                email: req.body.email
            });

            newUser.save().then(() => {
                res.status(200).json({
                    success: 'true',
                })
            })
        }

    });

});


app.get('/', (req, res) => {

    user.find({}, (err, found) => {
        if (!err) {
            res.send(found)
        }
    })
})

/*
userName : kaif@123
password : kaif
phone_no : 7488848209
email : kaif@gmail.com

*/

module.exports = app;