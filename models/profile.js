const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    name: String,
    posts: String,
    email: String,
    password: String,
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event'
    }]

})

module.exports = mongoose.model('profile', ProfileSchema)