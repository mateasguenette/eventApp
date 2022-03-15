var express = require('express');
const isLoggedin = require('../helper/isLogedin')


var router = express.Router();
var profileCntrl = require('../controllers/profile')

router.get('/createprofilepage', profileCntrl.CreateProfilepage)
router.post('/createprofilepage', profileCntrl.addProfile)
router.get('/showProfile',isLoggedin, profileCntrl.showProfile)

module.exports = router;