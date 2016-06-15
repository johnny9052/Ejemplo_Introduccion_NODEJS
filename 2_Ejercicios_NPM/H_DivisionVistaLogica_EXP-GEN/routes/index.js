var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  //Vamos a responderle al cliente un objeto datos
  var datos={
           titulo:'Articulos disponibles a la fecha',
           articulos: [
             { codigo: 1,precio:12,descripcion: 'peras' },
             { codigo: 2,precio:132,descripcion: 'manzanas' },
             { codigo: 3,precio:23,descripcion: 'naranjas' },               
           ],
           descuento:{lunes:'5%',martes:'10%'},
		   title: 'Express'
        };
   //Respondemos (Pagina que recibira los datos, datos)
  res.render('index', datos);  
});

module.exports = router;
