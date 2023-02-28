const express = require("express");
const bodyparser = require("body-parser");
const jalaali = require("jalaali-js");


const jwt = require('jsonwebtoken');
require('dotenv').config()


const app = express();


app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));


app.use('/user',require('./router/user'))


app.use('/memberadd',require('./router/member'))



app.use('/create',require('./router/createToken'))


app.use('/show',require('./router/showToken'))





// app.post('/cerateToken',async(req,res,next)=>{
//     let{phoneNumber,password}=req.body
//     const w =  jwt.sign({phoneNumber:phoneNumber,password:password},process.env.db_passwordToken,{expiresIn:"1800s"})
//     console.log("44444444444");
//     console.log(typeof(w));
//     return res.status(200).json({message:w})

// })

// app.get('/gettoken',async(req,res,next)=>{
  

//     console.log("9999999999999999");
//     console.log(req.headers);
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     const e = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6IjkzNzg1ODU3NzIiLCJwYXNzd29yZCI6IjEyMzQ1IiwiaWF0IjoxNjczOTY4MTk0LCJleHAiOjE2NzM5Njk5OTR9.jrIxpEY_azqCa-RYwyp6kIu-dTGRavgk-pq5Ghm4LOQ' , process.env.db_passwordToken)
//     return res.status(200).json({message:token , e})
   
// })



app.listen(4001);
