const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({


    id : {
        type: String,
        required: true,
        trim: true
    },


    logo : {
        type: String,
        required: true,
        trim: true
    },

    departureTime: {
        type: String,
        required: true,
    },

    arrivalTime: {
        type: String,
        required: true,
    },

    airlineName: {
        type: String,
        trim: true,
        required: true,
    },

    stops: {
        type: Number,
        required: true,
    },

    
    duration: {
        type: String,
        trim: true,
    },

    fromLocation: {
        type: String,
        trim: true,
        required: true,
    },

    toLocation: {
        type: String,
        trim: true,
        required: true,
    },

    airlineIATA: {
        type: String,
        trim: true,
        required: true,
    },

    airlineCode: {
        type: Number,
        trim: true,
        required: true,
    },


    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Book",bookSchema);