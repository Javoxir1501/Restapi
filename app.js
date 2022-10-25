const express = require('express')
const app = express()
const port = 8080
const rIndex = require("./router/index")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://localhost:27017/Movie")
const db = mongoose.connection
db.on("open", ()=>{
    console.log("mongodb running");
})
db.on("error", ()=>{
    console.log("mongodbda xato");
})


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("Hello world")
})

app.use(rIndex)

app.listen(port, ()=>{
    console.log("server running");
})