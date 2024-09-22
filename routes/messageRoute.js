const express=require('express');
const router=express.Router()

router.route("/")
.get((req,res)=>{
  res.render("form")
})
.post((req,res)=>{
  console.log(req.body)
  res.end()
})
module.exports=router