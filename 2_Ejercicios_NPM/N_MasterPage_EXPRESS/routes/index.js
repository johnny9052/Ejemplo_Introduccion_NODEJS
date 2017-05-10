var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /*Se especifica que no va a tener una master page*/
    res.render('index', {title: 'Express', layout: false});
});





/* GET home page. */
router.get('/estudiante', function (req, res, next) {    
    res.render('estudiante', {title: 'Estudiante'});
});


/* GET home page. */
router.get('/universidad', function (req, res, next) {
    res.render('universidad', {title: 'Universidad'});
});

module.exports = router;
