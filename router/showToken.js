const{Router} =require('express');
const {showToken} = require('../controller/showTokenController');

const router = Router()

router.post("/showing",showToken)

module.exports=router