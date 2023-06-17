const express = require("express");
const router = express.Router();
const Fuel = require('../models/fuelModel')

router.get("/getallfuels",async(req,res)=>{

    try{
        const fuels = await Fuel.find({})
        res.send(fuels)
    }catch(err){
        return res.status(400).json({message:error});
    }
});

module.exports = router;