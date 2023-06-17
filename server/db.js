const mongoose = require('mongoose');

require('dotenv').config(); 


mongoose.connect(process.env.MONGO_URI)

var db = mongoose.connection

db.on('connected',()=>{
    console.log('Mongo DB Connection Successful');
})

db.on('error',()=>{
    console.log('Mongo DB connection failed');
})

module.exports =mongoose