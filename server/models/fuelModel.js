const mongoose = require('mongoose');

const fuelSchema = mongoose.Schema({

    name: { type: String, require },
    variants: [],
    prices: [],
    image: { type: String, require },
    avail: {type: Number, require}
},{
    timestamps:true,
})

const fuelModel = mongoose.model('fuels ',fuelSchema)

module.exports = fuelModel

