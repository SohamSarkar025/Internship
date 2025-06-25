//Conection for backend to database
require('dotenv').config()
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI
//create a asynv finction to connect data 
const db=async()=>{
    try{
        await mongoose.connect(uri)
        console.log("Connected");
    }catch(err){
        console.log(err);
    }
}
module.exports = db;


