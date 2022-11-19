const express = require('express');
const  mongoose = require('mongoose');

const app = express()

const uri = "mongodb://localhost:27017/"

const ConnecttoMongo = () => {
    mongoose.connect(uri, () => {
        console.log("connected to Mongo Successfully")
    })
}

ConnecttoMongo();

app.get("/", (req, res) => {
    res.send("Hello Admin")
})

app.listen(5000, ()=> { console.log("Server Started at port 5000")})