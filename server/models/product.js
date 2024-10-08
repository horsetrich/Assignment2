const mongoose = require('mongoose');

//Matthew Kool 301184313 COMP229
//Is the schema/blueprint for every json for the mongoose database
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);