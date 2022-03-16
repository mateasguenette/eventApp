//const Profile = require('../models/profile')
const { populate } = require('../models/User')
const User = require('../models/User')
const Event = require('../models/event')
// async function CreateProfilepage(req, res){
    

//     res.render('newProfile')
// }

// function addProfile(req, res){

//     Profile.create(req.body)

//     console.log(req.body)

//     res.render('Profile', {profile})

// }

async function showProfile(req, res){
    
   let currentUser = await User.findById(req.user.id).populate('events')
   let eventsCreated = await Event.find({creator: req.user.id})

   
    res.render("profile", {currentUser, eventsCreated})

}

async function deleteUser(req, res){
    await User.findByIdAndDelete(req.user._id)

    res.redirect('/auth/signup')
}

function editProfile(req, res){
res.render('editProfile')
}

async function editProfile_post(req, res){
    console.log(req.body)
    await User.findByIdAndUpdate(req.user._id, req.body)
 res.redirect('/profile/showProfile')
}


 module.exports = { showProfile, deleteUser, editProfile, editProfile_post}