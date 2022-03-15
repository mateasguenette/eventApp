var express = require('express');
const app = require('../server');
var router = express.Router();
var eventCntrl = require('../controllers/events')
// var methodOverride = require('method-override')

// router.use(methodOverride('_method'))

// function addpost(req, res){
//     console.log('in add post function')

//     res.redirect('/view/addpost')

// }

router.get('/', eventCntrl.allEvents)
router.get('/addEvent', eventCntrl.addEvent)


router.post('/addEvent', eventCntrl.CreateEvent)

module.exports = router;