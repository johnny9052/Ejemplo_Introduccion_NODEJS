var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Se va a abrir el index sin mandar ningun parametro
  res.render('index');
});

module.exports = router;
