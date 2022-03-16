var express = require('express');
const app = require('../server');
var router = express.Router();
var eventCntrl = require('../controllers/events')
const isLoggedin = require('../helper/isLogedin')
// var methodOverride = require('method-override')

// router.use(methodOverride('_method'))

// function addpost(req, res){
//     console.log('in add post function')

//     res.redirect('/view/addpost')

// }

router.get('/', eventCntrl.allEvents)
router.get('/addEvent', isLoggedin, eventCntrl.addEvent)
router.get('/attending/:id', isLoggedin, eventCntrl.attendingEvent)
router.get('/deatails/:id', eventCntrl.viewDeatails)
router.get('/edit/:id', eventCntrl.edit)
router.post('/edit/:id', eventCntrl.edit_post)
router.get('/delete/:id', isLoggedin, eventCntrl.deleteEvent)

router.post('/addEvent', eventCntrl.CreateEvent)

module.exports = router;