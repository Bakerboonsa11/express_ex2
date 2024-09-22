const path = require("node:path");
const express=require('express')
const App=express();

const message_route=require('./routes/messageRoute')
const home_route=require('./routes/homeRoutes')

App.use("/",home_route)
App.use("/new",message_route)

App.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
App.set('view engine', 'ejs');

const port=8000
App.listen(port,()=>{console.log("the server is listening")})