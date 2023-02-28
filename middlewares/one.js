
const jwt = require('jsonwebtoken');

exports.one=async(req,res,next)=>{
    const authHeader = req.headers['authorization']
if(!authHeader){
  return  res.status(200).json({message:'شما مجاز نیستید'})
}


    const token = authHeader && authHeader.split(' ')[1]
    const changeToken = jwt.verify(token, process.env.db_passwordToken)
    console.log(req);
req.userId=changeToken.id;
req.phone =changeToken.phoneNumber;
   next()
}