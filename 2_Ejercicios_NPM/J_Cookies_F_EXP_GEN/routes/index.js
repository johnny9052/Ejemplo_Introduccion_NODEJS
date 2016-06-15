var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  /*Si existe una cookie que se llame email, entonces cargamos el formulario mandando dicha cookie*/
  if (req.cookies.mail)
    res.render('login',{mail:req.cookies.mail});
  else
	/*Si no, cargamos el formulario y ya*/
    res.render('login');      
});


router.post('/login', function(req, res, next) {
	/*Se crea la cookie con el valor del emaul que se mando,
	recibiendo parametros (nombre de la cookie, valor, fecha de expiracion en este caso
	son 3 anios (60 segundos, 60 minitos, 24 horas, 365 dias, 3 anios))*/	
    res.cookie('mail', req.body.mail,{ expires: new Date(Date.now() + (60*60*24*365*3)) });
    var pagina='<!doctype html><html><head></head><body>'+
               '<p>Se creo la cookie</p>'+
               '<a href="/">Retornar</a></body></html>';
    /*Se responde*/
    res.send(pagina); 
});


module.exports = router;
