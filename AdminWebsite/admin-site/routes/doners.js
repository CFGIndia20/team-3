var express = require('express');
var router = express.Router();
const obj=require('../controllers/doners');

router
.route('/add')
.post(obj.adddoner);


router
.route('/delete/:id')
.post(obj.deletedoner)

router
.route('/')
.get(obj.getdoners);


module.exports=router;