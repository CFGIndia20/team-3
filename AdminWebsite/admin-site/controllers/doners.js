var obj={};
obj.getdoners=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('SELECT * from donars', function (error, results, fields) {
    connection.release();
    if(error){
      console.log(error);
      connection.release();
      next(error);
    }

    else{
      res.status(200).json(results);
    }
  });
});
}

obj.adddoner=(req,res,next)=>{
  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query( "INSERT INTO doners (u_id,name,phone,email,security_code,d_id) values (?,?,?,?,?,?)",[req.body.u_id,req.body.name,req.body.phone,req.body.email,req.body.security_code,req.body.d_id],
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


obj.deletedoner=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('Delete from doners where d_id=?',[req.params.id],
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
