var express = require('express');
var router = express.Router();

const obj=require('../controllers/feedback');

router
.route('/')
.get(obj.getfeedbacks);

module.exports=router;
