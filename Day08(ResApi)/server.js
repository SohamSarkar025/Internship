require("dotenv").config();
//Create db variable and require connection.js
const db = require("./db/conn");
//create collection variable to store the collectionSchema module
const collection = require("./model/collectionSchema"); 
//create data variable to store the product.json file
const data = require("./product.json");

db();// Connect to MongoDB

const send = async () => {
    try {
        await collection.create(data);
        console.log(" Data inserted successfully");
    } catch (err) {
        console.error("Error inserting data:", err);
    }
};

send(); 
