var express = require('express');
const app = require('../server');
var router = express.Router();
var authtCntrl = require('../controllers/auth')

router.get('/signup', authtCntrl.signup)

router.post('/signup', authtCntrl.signup_post)

router.get('/signin', authtCntrl.signin)

router.post('/signin', authtCntrl.signin_post)

router.get('/logout', authtCntrl.logout)
module.exports = router;