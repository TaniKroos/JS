require('dotenv').config();
const express = require('express');
const http = require('http');
const User = require('./model/user')
const mongoose = require('mongoose');
const { mongoConnect } = require('./services/mongo');
const app = express();
app.use(express.json());


app.post('/signup',async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const exist = await User.findOne({username : username});
    if(exist){
        return res.status(400).json({
            msg: "user already exist",
        })
    }
    const user = new User({
        username,
        password
    });
    user.save();
    return res.status(201).json({user: user._id});


})

app.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username,
        password,
    })
    if(!user){
        return res.status(400).json({
            msg: "Don't be mean"
        })
    }
    return res.status(200).json({
        user: user._id
    })
});

const server = http.createServer(app);
async function startServer(){
    await mongoConnect(),
    server.listen(3000,()=>{
        console.log('HIIII');
    })
}

startServer();