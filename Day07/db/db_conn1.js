const {MongoClient} = require("mongodb")
const uri = "mongodb://soham:soham123@localhost:27017/admin"

async function connectMongoclient(){
    try{
        const client = new MongoClient(uri)
        await client.connect()
        console.log("Connected")

        const db = client.db("mongoClientDB")
        console.log("db created");

        const collection = db.collection("vt_2025_a1")
        console.log("Collection Created");

        const data1 = collection.insertOne({"name":"ardent","subject":"mern"})
        console.log(()=>{
            `${data1}:/data is inserted`
        });
    }catch(err){
        if(err){
            console.log(err);
        }
    }
}

module.exports = connectMongoclient



