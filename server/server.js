const express = require("express")
const Fuel = require('./models/fuelModel')
const db = require('./db')
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.json());

const fuelsRoute = require('./routes/fuelsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/fuels/', fuelsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/',ordersRoute)

const __dirname1=path.resolve();
if(process.env.NODE_ENV==="production"){

    app.use(express.static(path.join(__dirname1,'../client/build')));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"../client","build","index.html"));
    })
}else{
    app.get("/", (req, res) => {
        res.send("Server working " + port);
    });        
}
/*
app.get("/", (req, res) => {
    res.send("Server working " + port);
});
*/
const port = process.env.PORT || 5000;

app.listen(port, () => 'Server is running on port 5000');