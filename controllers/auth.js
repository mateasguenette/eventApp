// API's for Authentication
const User = require('../models/User');
const bcrypt = require('bcrypt');
let passport = require('../helper/ppConfig');
const salt = 10;
const {validationResult} = require('express-validator')

function signup(req, res){
    console.log('in sign up function')
    res.render("auth/signup");
}

function signup_post(req, res){
    let user = new User(req.body);
    console.log(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    user.password = hash;

    user.save()
    .then(() => {
        res.redirect('/auth/signin');
    })
    .catch((err) => {
        console.log(err);
         // res.send("ERRRRORRR!!!!");
        
           
         res.redirect('/auth/signin')
         
        
    })
}

function signin(req, res){
    console.log('im in the signin function')

    res.render('auth/signin')

}

 const signin_post = passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/auth/signin",

    })

module.exports = {signup, signup_post, signin, signin_post}