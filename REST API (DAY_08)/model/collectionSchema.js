require("dotenv").config();
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, "Without price you can't store"]
    },
    rating: {
        type: Number,
        default: 4.5
    },
    company: {
        type: String,
        enum: {
            values: ["APPLE", "SAMSUNG"],
            message: `{VALUE} is not allowed`
        }
    }
});

// Creating product_details schema
module.exports = mongoose.model("product_details", schema);
