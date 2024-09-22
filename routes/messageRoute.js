const express=require('express');
const router=express.Router()

router.route("/")
.get((req,res)=>{
  res.render("form")
})
.post((req,res)=>{
    res.end("this is post route")
})
module.exports=router