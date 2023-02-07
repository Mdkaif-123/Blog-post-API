const express = require('express');
const mongoose = require('mongoose');
const route = require('./Routes/user');
const post = require('./Routes/post');
const port = 5000;
const app = express();


app.use('/api/user',route);
app.use('/api/post',post)

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/blogPostDB').then(()=>{
    console.log("Data base is connected");
});




app.listen(port, ()=>{
    console.log(`PORT IS RUNNING ON : http://localhost:${port}/`);
})