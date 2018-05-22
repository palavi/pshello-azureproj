import { Router } from "express";
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = { 
    title: 'Express',
    message: process.env.MESSAGE || 'This is Development' 
  };
  res.render('index', model);
});

export default router;
