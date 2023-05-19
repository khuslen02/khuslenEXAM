const express = require("express");
const mongoose = require("mongoose")
const router = require("./route/route")
const app=express();

const uri='mongodb+srv://khuslen:huslen0213@khuslen.9jgs1a3.mongodb.net/?retryWrites=true&w=majority'
async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("succesfully connected to mongodb");
    }catch(error){
        console.error(error);
    }
}
connect();
app.use('/',router);
app.listen(5000,()=>{
    console.log("server started on port 5000");
})
