//const Profile = require('../models/profile')
const User = require('../models/User')

// async function CreateProfilepage(req, res){
    

//     res.render('newProfile')
// }

// function addProfile(req, res){

//     Profile.create(req.body)

//     console.log(req.body)

//     res.render('Profile', {profile})

// }

function showProfile(req, res){
    console.log(req.query.id);
    console.log(req.user)
    
          res.render("profile")
    
   

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