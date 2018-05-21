var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = { 
    title: 'Express',
    message: process.env.MESSAGE || 'This is Development' 
  };
  res.render('index', model);
});

module.exports = router;
