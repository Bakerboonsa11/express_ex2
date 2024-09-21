const path = require("node:path");
const express=require('express')
const App=express();

 const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

App.get('/',(req,res)=>{

    res.render("index",{links:links})})

App.get("/:params/messages",(req,res)=>res.send("this route will never reached"))

App.set("views",path.join(__dirname,"views"))
App.set("view engine","ejs")


const port=8000
App.listen(port,()=>{console.log("the server is listening")})