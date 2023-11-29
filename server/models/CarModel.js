const mongoose = require('mongoose');

let CarSchema = mongoose.Schema({
   
    make: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true,
    },
    
    // registration: {
    //     type: String,
    //     required: true
    // },
    owner: {
        type: String,
        required: true,
    },
});

const Car = mongoose.model('Car', CarSchema);

module.exports = { Car };
