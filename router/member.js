const{Router} =require('express');
const {add,show} = require('../controller/memberController');
const {one}= require('../middlewares/one');
const router = Router()

router.post("/adding/",one,add)
router.post("/showing/",show)







module.exports=router