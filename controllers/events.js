const { redirect } = require('express/lib/response')
const Event = require('../models/posts')
const User = require('../models/User')

async function allEvents(req, res){
    console.log('in the all event function')
    // Events.create(req.body)
    let allEvent = await Event.find({}).populate('creator')
    console.log(allEvent)
    console.log(req.user._id)
    let user = await User.findById(req.user._id)
    console.log(user)
    res.render('index', {allEvent: allEvent})
}

function addEvent(req, res){
    res.render('addPost')
}

async function CreateEvent(req, res){
    console.log(req.body)
    req.body.creator = req.user._id
    console.log(req.body)
    let event = await Event.create(req.body)
    let user = await User.findById(req.user._id)
    user.events.push(event._id)
    await user.save()
    res.redirect('/main')
}

async function attendingEvent(req, res){
    // push user id to event.attendies
    let eventId = await Event.findById(req.params.id)
    console.log(`this is the events: ${eventId}`)
    eventId.attendies.push(req.user._id)
    await eventId.save()
    let user = await User.findById(req.user._id)
    user.events.push(eventId._id)
    await user.save()
    res.redirect('/')
}

module.exports = {allEvents, addEvent, CreateEvent, attendingEvent}