var moment = require('moment');
const passport=require('passport');
var obj={};

obj.getlogin=(req,res)=>{
  if(req.isAuthenticated()){
    res.redirect('/dashboard');
  }
  else{
    res.render('login');
  }
};

obj.submitlogin=(req,res,next)=>{
if(!req.body.username||!req.body.password){
  res.redirect('/login');
}
  passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/login'
})
}

obj.register=(req,res,next)=>{
  pool.getConnection(function(err, connection) {
  if (err) next(err);
          connection.query(`select * from users where email = ?`,[req.body.email],async (err,result)=>{
            if(err){
              connection.release();
              console.log(err);
            }
            else if(result.rows[0]){
              connection.release();
              res.status(200).json({data:"Already registered"});
            }
            else{
              if(req.body.password==req.body.password2){
              var p = await bcrypt.hash(req.body.password,5);
                connection.query(`insert into users(firstname,lastname,email,password) values(?,?,?,?) returning *`,
                [req.body.firstname,req.body.lastname,req.body.email,p],function(err,result){
                  if(err){
                    console.log(err);
                    connection.release();
                  }
                  else{
                    console.log(result);
                    connection.release();
                    res.status(200).json({
                      success:"true"
                    })
                  }
                })
              }
              }
    })
  })
}



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
                user: "",
                pass: ""
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
              from:'',
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
