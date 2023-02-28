

const jwt = require('jsonwebtoken');
exports.showToken = async(req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const changeToken = jwt.verify(token, process.env.db_passwordToken)
    return res.status(200).json({message:changeToken})
}