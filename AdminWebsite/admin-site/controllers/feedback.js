var obj={};
// Displaying the average rating of a particular unit
obj.getfeedbacks=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query("select ? , ? , ? , ? , ? from ? , ? where ?=? group by ? , ?",[u_id,`avg(req.body.rating)`,unit_id,unit,center,questions,details,questions.u_id,details.uid,questions.u_id,center],function (error, results, fields) {
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
