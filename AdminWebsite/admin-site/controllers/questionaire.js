var obj={};

obj.getQuestions=(req,res,next)=>{
  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('SELECT * FROM questionaire', function (error, results, fields) {
    connection.release();
    if(err){
      console.log(err);
      client.release();
      next(err);
    }

    else{
      res.status(200).json(results);
    }
  });
  });
}

obj.postQuestion=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);

  connection.query("INSERT INTO questionaire (u_id,q_id,question,rating) values (?,?,?,?)",[req.body.u_id,req.body.q_id,req.body.question,req.body.rating], function (error, results, fields) {

    if(error){
      console.log(error);
      connection.release();
      next(err);
    }

    else{
        connection.release();
      res.status(200).json(results);

    }

  });
});
}

obj.deleteQuestion=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('Delete from questionaire where q_id=?',[req.params.id], function (error, results, fields) {
    connection.release();
    if(error){
      console.log(error);
      client.release();
      next(err);
    }
    else{
      res.status(200).json(results);
    }
  });
});
}

module.exports=obj;
