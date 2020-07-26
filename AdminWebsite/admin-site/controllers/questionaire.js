var obj={};
//Displaying all the questions used in the feedback form currently
obj.getQuestions=(req,res,next)=>{
  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('SELECT * FROM questions', function (error, results, fields) {
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
//Adding new questions to the feedback form
obj.postQuestion=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);

  connection.query("INSERT INTO questions (q_id,u_id,question) values (?,?,?)",[req.body.q_id,req.body.u_id,req.body.question], function (error, results, fields) {

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

//Deleting the questions for the feedback form
obj.deleteQuestion=(req,res,next)=>{

  pool.getConnection(function(err, connection) {
  if (err) next(err);
  connection.query('Delete from questions where q_id=?',[req.params.id], function (error, results, fields) {
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
