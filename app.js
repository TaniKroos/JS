const express = require('express');
const check = require('./middle');
const jwt = require('jsonwebtoken');
const z = require('zod');
//const schema = z.array(z.number());
const schema = z.object({
    email: z.string(),
    pass: z.string(),
   
})
const app = express();
const responseTimeLogger = require('./resp')

app.use(express.json());
app.use(responseTimeLogger);
app.get('/signup', (req,res)=>{
    const p = req.body;
    const rep = schema.safeParse(p);
    res.send({
        rep
    })
})
app.post('/' ,(req,res)=>{
    const k = req.body.k;
    const response = schema.safeParse(k);
    res.send({
        response
    })
});

//global catches
// error based mmiddlewares




app.listen(3000,()=>{f
    console.log(`Listening on somewhere`);
})