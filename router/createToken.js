const{Router} =require('express');
const {createToken} = require('../controller/createTokenController');

const router = Router()

router.post("/creating/",createToken)







module.exports=router