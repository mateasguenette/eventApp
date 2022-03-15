const { redirect } = require('express/lib/response')
const Event = require('../models/posts')

async function allEvents(req, res){
    console.log('in the all event function')
    // Events.create(req.body)
    let allEvent = await Event.find({})
    console.log(allEvent)

    res.render('index', {allEvent: allEvent})
}

function addEvent(req, res){
    res.render('addPost')
}

function CreateEvent(req, res){
    console.log(req.body)

    Event.create(req.body)

    res.redirect('/main')
}

module.exports = {allEvents, addEvent, CreateEvent}