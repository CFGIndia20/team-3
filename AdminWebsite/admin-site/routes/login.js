var express = require('express');
var router = express.Router();

const obj=require('../controllers/login');

router
.route('/login')
.get(obj.getlogin)
.post(obj.submitlogin);

router
.route('/register')
.post(obj.register);

module.exports=router;
