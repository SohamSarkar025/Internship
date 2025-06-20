
require("dotenv").config()
//Protected Script not possible to access externally
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URL

async function conn(){
    try{
        await mongoose.connect(uri)
        console.log("Connected");

        const schema = new mongoose.Schema({
            name:String,
            age:Number
        })

        const collection = mongoose.model("VT_2025_a2",schema)

        const data1 = new collection({"name":"ABC","age":"21"})
        data1.save();

    }catch(err){
        if(err){
            console.log(err);
        }
    }
}
module.exports=conn