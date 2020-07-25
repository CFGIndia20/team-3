const passport=require('passport');
const bcrypt=require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport){
  loginAttempt();
  function loginAttempt(){
  passport.use('local',new LocalStrategy({passReqToCallback:'true'},function(req,username,password,done){
    pool.connect().then(client=>{
      client.query(`select * from users where email = $1`,[username],function(err,result){
        if(err){
        console.log(err);
        client.release();
        return done(err);}
        else if(!result.rows[0]){
          client.release();
          return done(null,false);
        }
        else{
          bcrypt.compare(password,result.rows[0].password,function(err,check){
            if(err){
              client.release();
              done(err);
            }
            else if(!check){
              client.release();
              done(null,false);
            }
            else{
              console.log("success");
              client.release();
              done(null,result.rows[0]);
            }
          })
        }
      })
    })
  }))
}
passport.serializeUser(function(user,done){
  done(null,user.id)
})
passport.deserializeUser(function(id,done){
  pool.connect().then(client=>{
    client.query(`select * from users where id=$1`,[id],function(err,user){
      client.release()
      done(null,user.rows[0]);
    })
  })
})
};
