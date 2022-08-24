const mongoose=require("mongoose");
require('dotenv').config()

async function dbConnect(){
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Succesfully connested to MongoDB")
    })
    .catch((error)=>{
        console.log("Unable to connect to MongoDB")
        console.error(error)
    })
}


module.exports= dbConnect;