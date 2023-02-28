const member = require("../model/member")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()


exports.createToken = async(req,res,next)=>{
    let{phoneNumber,password}=req.body
    
    let person = await member.findOne({
        where:{phoneNumber:phoneNumber}
    })
    if(!person){
        return res.status(200).json({message:"no person"})
    }
    let checkPassword = await bcrypt.compare(password,person.password)
    if(checkPassword==false){
        return res.status(200).json({message:"password is incorrect"})
    }

    const create = jwt.sign({phoneNumber:phoneNumber,id:person.id},process.env.db_passwordToken,{expiresIn:"86400s"})
    return res.status(200).json({message:create})
}   