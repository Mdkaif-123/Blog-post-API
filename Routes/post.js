const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('../Models/post');
const User = require('../Models/user');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


//CREATE UPDATE DELETE POST AND FETCH  POST

app.route('/:id')

    // CREATE A POST
    .post((req, res) => {

        User.findById(req.params.id, (err, foundUser) => {
            if (!err) {
                const newPost = new Post({
                    userId: req.params.id,
                    title: req.body.title,
                    desc: req.body.desc,
                    img: req.body.img,
                    author: foundUser.userName
                });

                newPost.save()
                    .then(() => {
                        res.status(200).json({
                            success: "true"
                        })
                    })


            } else {
                res.status(500).json({
                    userId: "false"
                })
            }
        })
    })

    // UPDATE A POST
    .put((req, res) => {

        const user = User.findById(req.params.id);
                Post.updateOne(
                    { userId: req.params.id },
                    { $set: {
                        userId: req.params.id,
                        title: req.body.title,
                        desc: req.body.desc,
                        img: req.body.img,
                        author: user.userName
                    }}
                )
                .then(() =>{
                    res.status(200).json({
                        status : "Updated"
                    })
                })

                .catch(() =>{
                    res.send("You can only update your post")
                })

    })


    // DELETE A POST
    .delete((req, res) => {

        User.findById(req.params.id , (err, result) =>{
            if (err) {
                res.send("You can delete only your post")
            } else{
                Post.deleteOne({ userId: req.params.id })
                .then(()=>{
                    res.status(200).json({success : "true"});
                })
            }
        })
    }
);


    // FETCH ALL POST 

    app.get("/",(req, res) => {
        Post.find({}, (err, foundPost) => {
            if (!err) {
                res.status(200).json(foundPost)
            } else {
                res.send(" No post available");
            }
        })

    })
    // FETCH ALL POST BY ID

    app.get('/spec/:postId', (req, res) => {

        Post.findById(req.params.postId, (err,result) =>{
            if (err) {
                res.status(500).send("Post doesn't Exits..!")
            } else {
                res.send(result);
            }
        })
    })


    app.get('/mypost/:userId', (req, res) => {

        Post.find({userId : req.params.userId}, (err,result) =>{
            if (err) {
                res.status(500).send("Post doesn't Exits..!")
            } else {
                res.send(result);
            }
        })
    })



// {
//     "_id": "63e13fb7e55de9cc4329a9d4",
//     "userName": "kaif@123",
//     "password": "$2b$10$XFjBtVBntcF5Wj7drGJ3IevS7QWUOPgmAm2Vj9cMfsCSTBc1dvVLO",
//     "phone_no": 7488848209,
//     "email": "kaif@gmail.com",
//     "__v": 0
//   }

module.exports = app;

