var express = require('express');
var router = express.Router();

const obj=require('../controllers/questionaire');

router
.route('/')
.get(obj.getQuestions)
.post(obj.postQuestion);


router
.route('/delete/:id')
.post(obj.deleteQuestion);



module.exports=router;
