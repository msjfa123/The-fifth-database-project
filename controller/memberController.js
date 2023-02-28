const member = require("../model/member")
const bcrypt = require("bcrypt");

exports.add = async(req,res,next)=>{


    console.log("8888888888888888");
    console.log(req.userId);
    console.log(req.phone);
    let{fullName,phoneNumber,password,age}=req.body

    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"your phoneNumber must be 10 didita and the first item not be zero"})
    }
    if(parseInt(age)<18){
        return res.status(200).json({message:"your age must be grather than 18"})
    }

    let check = await member.findOne({
        where:{phoneNumber:phoneNumber}
    })
    if(check){
        return res.status(200).json({message:"you are an olde member"})
    }

    let hashingPassword = await bcrypt.hash(password,5)

    await member.create({
        fullName:fullName,
        phoneNumber:phoneNumber,
        password:hashingPassword,
        age:age
    })
    return res.status(200).json({message:"aading succsecful"})

}

exports.show = async(req,res,next)=>{
    let{phoneNumber,password} = req.body

    if(phoneNumber.length!=10 || phoneNumber[0]=="0"){
        return res.status(200).json({message:"your phoneNumber must be 10 didita and the first item not be zero"})
    }

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

    return res.status(200).json({message:person})
    
}


