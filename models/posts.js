const mongoose = require('mongoose')
const Schema = mongoose.Schema



const eventSchema = new Schema({
    name: String,
    description: String,
    photo: String,
    location: String,
    price: Number,
    date: Date,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    attendies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    }]

})

let Event = mongoose.model('event', eventSchema)

module.exports = Event