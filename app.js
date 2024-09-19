const express=require('express')
const App=express();
App.get("/messages",(req,res)=>res.send("this route will never reached"))

App.get('*',(req,res)=>res.send("the response first reached"))









const port=8000
App.listen(port,()=>{console.log("the server is listening")})