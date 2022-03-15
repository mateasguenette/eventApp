var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

//use env file
require('dotenv').config();

let session = require('express-session');
let passport = require('./helper/ppConfig');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);




app.use(session({
  secret: process.env.secret,
  saveUninitialized: true,
  resave: false,
  cookie: {maxAge: 360000}
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();

})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainRouter = require('./routes/main');
var profileRouter = require('./routes/profile')
const authRoutes = require("./routes/auth");




app.get('/', function(req, res){
  res.redirect('/main')
});
app.use('/users', usersRouter);
app.use('/main', mainRouter);
app.use('/profile', profileRouter)
app.use('/auth', authRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



mongoose.connect(
  "mongodb://127.0.0.1:27017/mongoose-eventApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongodb connected successfully!");
  }
);

module.exports = app;
