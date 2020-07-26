var express = require('express');
var router = express.Router();

const obj=require('../controllers/login');

router
.route('/login')
.post(obj.submitlogin);



module.exports=router;
