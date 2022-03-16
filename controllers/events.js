const { redirect } = require('express/lib/response')
const Event = require('../models/event')
const { events, findById } = require('../models/User')
const User = require('../models/User')

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

 async function viewDeatails(req, res){
    //  console.log(req.params.id)

    //  let event = await Event.findById(req.params.id).populate('attendies creator')
     
    Event.findById(req.params.id).populate('attendies creator').exec(function(err, event){
        // let eventId = await Event.findById(req.params.id)
        console.log(event)
        res.render('deatails', {event})
    })
    
 // res.render('deatails', {event})
    
}

async function edit(req, res){
let event = await Event.findById(req.params.id)

res.render('editEvent', {event})
}

async function edit_post(req, res){
await Event.findByIdAndUpdate(req.params.id, req.body)
res.redirect('/profile/showProfile')
}

async function deleteEvent(req, res){
    await Event.findByIdAndDelete(req.params.id)
    await User.updateOne({_id: req.user.id}, {$pull: {events: req.params.id}})
   
    
    res.redirect('/profile/showProfile')
}
module.exports = {allEvents, addEvent, CreateEvent, attendingEvent, viewDeatails, edit, edit_post, deleteEvent}