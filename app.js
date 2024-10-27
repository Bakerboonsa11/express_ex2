const path = require("node:path");
const express=require('express')
const App=express();

const message_route=require('./routes/messageRoute')
const home_route=require('./routes/homeRoutes')
App.use(express.urlencoded({ extended: true }));
// App.use(express.json())
App.use("/",home_route)
App.use("/new",message_route)

App.set('views', path.join(__dirname, 'views'));

// Set EJS as the view
App.set('view engine', 'ejs');

const port=8000
App.listen(port,()=>{console.log("the server is listening")})

let a =[1,2,3,4,5]

function theOlder(){
    for(i in a){
        console.log(i+1)
    }
}

if(Number!==null){
    theOlder()
}


1234