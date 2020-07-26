var obj={};

//Listing out all the doners
obj.getdoners=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('SELECT * from donars', function (error, results, fields) {
    connection.release();
    if(error){
      console.log(error);
      next(error);
    }

    else{
      res.status(200).json(results);
    }
  });
});
}
//Adding a new doner
obj.adddoner=(req,res,next)=>{
  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query( "INSERT INTO donars (u_id,name,phone,email,security_code,d_id) values (?,?,?,?,?,?)",[req.body.u_id,req.body.name,req.body.phone,req.body.email,req.body.security_code,req.body.d_id],
 function (error, results, fields) {
connection.release();
    if(error){
      console.log(error);
      next(error);
    }
    else{
      res.status(200).json(results);
    }
  });
});
}

//Removing a doner information from the database
obj.deletedoner=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('Delete from donars where d_id=?',[req.params.id],
   function (error, results, fields) {
connection.release();
    if(error){
      console.log(error);
      next(error);
    }
    else{
      res.status(200).json(results);
    }
  });
});
}

module.exports=obj;
