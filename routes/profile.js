var express = require('express');
const isLoggedin = require('../helper/isLogedin')

var methodOverride = require('method-override')



var router = express.Router();
var profileCntrl = require('../controllers/profile')

router.use(methodOverride('_method'))

// router.get('/createprofilepage', profileCntrl.CreateProfilepage)
// router.post('/createprofilepage', profileCntrl.addProfile)
router.get('/showProfile',isLoggedin, profileCntrl.showProfile)
router.delete('/delete', isLoggedin, profileCntrl.deleteUser)
router.get('/edit', isLoggedin, profileCntrl.editProfile)
router.post('/editProfile', profileCntrl.editProfile_post)
module.exports = router;