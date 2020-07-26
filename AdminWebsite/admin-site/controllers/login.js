var moment = require('moment');
const passport=require('passport');
var obj={};

// submitting the login form
obj.submitlogin=(req,res,next)=>{
if(!req.body.username||!req.body.password){
  res.redirect('/login');
}
  passport.authenticate('local',{
    successRedirect:'localhost:3000/app',
    failureRedirect:'localhost:3000/'
})
}
// Changing the password
obj.changepassword=(req,res,next)=>{
  var email=req.params.email;
  var token=req.params.token;
  pool.getConnection(function(err, connection) {
  if (err) next(err);
    connection.query(`select * from users where email=? and resetpasswordexpires>=?`,[email,moment.utc()],function(err,result){
      if(err){
        console.log(err);
        connection.release();
      }
      else if(!result.rows[0]){
        console.log('URL expired');
        connection.release();
      }
      else{
        bcrypt.compare(token,result.rows[0].resetpasswordtoken,function(err,check){
          if(err){
            console.log("err");
          }
          else if(!check){
            console.log("Invalid token");
            connection.release();
          }
          else{
            res.redirect('/verify',{email:email});
          }
        })
      }
    })
  })
}

//Provision of reset token required for the password change
obj.resettoken=(req,res,next)=>{
  var email=req.body.email;
  pool.getConnection(function(err, connection) {
  if (err) next(err);
    connection.query(`select * from users where email=?`,[email],function(err,result){
      if(err){
        console.log(err);
        connection.release();
      }
      else if(!result.rows[0]){
        console.log("please enter valid email");
        connection.release();
      }
      else {
        var token=crypto.randomBytes(20).toString('hex');
        console.log(token)
        bcrypt.hash(token,10,function(err,hash){
          if(err){
            console.log(err);
            connection.release();
          }
          else{
            connection.query(`update users set resetpasswordtoken=? ,resetpasswordexpires=? where email=?`,[hash,moment.utc().add(2,'hours'),req.body.email],
          function(err,result){
            if(err){
              console.log(err);
            }
            else{
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
            var options={
              from:process.env.Sender,
              to:email,
              subject:'reset passport',
              html:'<h4>Reset your password<h4>'
              +'<a href="http://localhost:3000/reset/"+email+'/'+token+</a>'

            }
            transporter.sendMail(options,function(err,result){
              if(err){
                console.log(err);
              }
              else{
                connection.release();
                res.redirect('/login');
              }
            })
            }
          })
          }
        })
      }
    })
  })
}

module.exports=obj;
