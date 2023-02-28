const{Router} =require('express');
const {seyHello} = require('../controller/userController');

const router =  Router();

router.get('/add',(req,res,next)=>{
    res.status(200).json({message:"hiii"})
})
router.get('/delete/:id',seyHello)


module.exports=router