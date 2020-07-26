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
// connection to the database
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
app.use(passport.initialize());//for a session based authentication
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
//==
setTimeout(function(){
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.GMAIL,
    pass: process.env.PASSWORD
  },
});

transporter.verify(function(err,success){
  if(err){
    console.log(err);
  }
  else{
    console.log("ready to send mail");
  }
});
//sending updates via email to doners
// partially completed code
pool.getConnection(function(err, connection) {
if (err) next(err);
connection.query('SELECT * from reports', function (error, results, fields) {
  connection.release();
  if(error){
    console.log(error);
    connection.release();
    next(error);
  }

  else{
    var options={
      from:'process.env.SENDER',
      to:process.env.receiver,
      subject:'reset passport',
      html:`<h4>${results.no_of_days}<h4> <br>
      <h4> ${results.no_of_families}<h4> <br>
      <h4> ${results.unit}<h4> <br>`

    }
    transporter.sendMail(options,function(err,result){
      if(err){
        console.log(err);
      }
    })
    }
    },1000*86400)
  }
});



const PORT=process.env.PORT||4000;
app.listen(PORT,console.log(`Listening on port ${PORT}`));
