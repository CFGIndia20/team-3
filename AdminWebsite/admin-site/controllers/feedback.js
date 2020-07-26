var obj={};
// Displaying the ratings and feedback information
obj.getfeedbacks=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query("Select u_id,avg(rating), unit_id,unit,center from questions, details where questions.u_id=details.uid group by questions.u_id,center",function (error, results, fields) {
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
