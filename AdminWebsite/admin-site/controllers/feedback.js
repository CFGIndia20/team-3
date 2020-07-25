var obj={};

obj.getfeedbacks=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query("select * from questionaire",function (error, results, fields) {
    connection.release();
    if(error){
      console.log(error);
      client.release();
      next(error);
    }
    else{
      res.status(200).json(results);
    }
  });
});
}


module.exports=obj;
