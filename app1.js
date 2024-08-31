const jwt = require('jsonwebtoken');
const jw = "1221"
const express = require('express');
const app =express();
app.use(express.json());
const Users = [
    {
        username: "Tanish",
        password: "123456",
    },
    {
        username: "Kroos",
        password: "123987",
    }
];
async function UserExist(name,pass){
    for(let i of Users){
        if (i.username === name && i.password === pass) {
            return true;
        }
    }
    return false;
}

app.post('/signin',async (req,res)=>{
    const username = req.body.username;
    const pass = req.body.password;
    console.log('hello from post req')
    if(!await UserExist(username,pass)){
        console.log('hello from post req failed')
        return res.status(403).json({
            msg: "Dont be mean"
        })
    }
    console.log('hello from post req pass')
    var token = jwt.sign({username: username},jw);
    return res.json({
        token
    })
});


app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    try {
        const decode = jwt.verify(token,jw);
        const username = decode.username;
        return res.json({
            users: Users
        })
    } catch (err) {
        return res.status(400).json({
            msg: "Dont be mean"
        })
    }
})
app.listen(3000,()=>{
    console.log('hellow')
})