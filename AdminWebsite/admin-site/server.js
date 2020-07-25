const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const bodyParser=require('body-parser');
const session = require('express-session');
const path = require('path');
const passport=require('passport');
var bcrypt=require('bcryptjs');
var flash = require('connect-flash');
dotenv.config({path:'./config/config.env'});



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'my_db'
});

global.pool=pool;
app.use(session({
  secret:'jpmorgan',
  saveUninitialized:true,
  resave:true
}));
require('./utils/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req,res,next){
  res.locals.error = req.flash('error');
  res.locals.success=req.flash('success');
  next();
});

var login=require('./routes/login');
var feedback=require('./routes/feedback');
var questionaire=require('./routes/questionaire')
var doners = require('./routes/doners');

app.use('/questionaire',questionaire);
app.use('/feedback',feedback);
app.use('/doners',doners);
app.use('/',login);



const PORT=process.env.PORT||4000;
app.listen(PORT,console.log(`Listening on port ${PORT}`));
