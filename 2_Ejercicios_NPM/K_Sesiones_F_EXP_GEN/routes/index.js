var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Cuando se da click en el boton login se abre el formulario de login*/
router.get('/login', function(req, res, next) {
  res.render('login');      
});


/*Cuando se llenan los datos y se da click en login llegan los datos*/
router.post('/login', function(req, res, next) {
	/*Se crea una variable de sesion llamada mail con el dato que llega*/
    req.session.mail=req.body.mail;
    
    var pagina='<!doctype html><html><head></head><body>'+
               '<p>Se creo la variable de sesión</p>'+
               '<p>Puede ingresar al panel de control:</p>'+
               '<a href="/panel">Ingresar</a><br>'+
               '</body></html>';
    /*Se responde*/
    res.send(pagina); 
});


router.get('/panel', function(req, res, next) {
	/*Si existe la variable de sesion*/
    if (req.session.mail) {
		/*Se estructura la respuesta*/
      var pagina='<!doctype html><html><head></head><body>'+
               '<p>Bienvenido</p>'+
               req.session.mail+
               '<br><a href="/logout">Logout</a></body></html>';
			   /*Se responde*/
      res.send(pagina);
    } else {
      var pagina='<!doctype html><html><head></head><body>'+
               '<p>No tiene permitido ingresar sin login</p>'+
               '<br><a href="/">Retornar</a></body></html>';
      res.send(pagina);        
    }
});


router.get('/logout', function(req, res, next) {
	/*Se destruye las variables de sesion*/
      req.session.destroy();
      var pagina='<!doctype html><html><head></head><body>'+
               '<br><a href="/">Retornar</a></body></html>';
      res.send(pagina);
});



module.exports = router;
