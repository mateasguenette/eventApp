const Profile = require('../models/profile')
const User = require('../models/User')

async function CreateProfilepage(req, res){
    

    res.render('newProfile')
}

function addProfile(req, res){

    Profile.create(req.body)

    console.log(req.body)

    res.render('Profile', {profile})

}

function showProfile(req, res){
    console.log(req.query.id);
    console.log(req.user)
    
          res.render("profile")
    
   

}


module.exports = {CreateProfilepage, addProfile, showProfile}