var express = require('express');
var router = express.Router();

/*Se carga el modulo multer para mandar archivos*/
var multer = require('multer');
/*Se referencia la ruta destini temporal de loas imagenes que seran cargadas*/
var upload = multer({dest: './uploads/'});
/*Se hace import al modulo que permite manipilar archivos*/
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Carga el formulario subir foto*/
router.get('/subirfoto', function(req, res, next) {
  res.render('subirfoto');
});

/*Cuando se mandan todas las fotos cargadas, indicando que se cargaron 2 fotos con el mismo nombre, por
 defecto de cargar al formualrio uploads*/
router.post('/subirfoto', upload.array('foto', 2), function(req, res, next) {
	/*Por cada foto cargada*/
    for(var x=0;x<req.files.length;x++) {
        //copiamos el archivo a la carpeta definitiva de fotos
       fs.createReadStream('./uploads/'+req.files[x].filename).pipe(fs.createWriteStream('./public/fotos/'+req.files[x].originalname)); 
       //borramos el archivo temporal creado
       fs.unlink('./uploads/'+req.files[x].filename); 
    }  
    var pagina='<!doctype html><html><head></head><body>'+
               '<p>Se subieron las fotos</p>'+
               '<br><a href="/">Retornar</a></body></html>';
        //Se responde
      res.send(pagina);        
});


router.get('/verfotos', function(req, res, next) {
	//Se leen todos los archivos de la ruta donde se encuentran las imagenes
   fs.readdir('./public/fotos/', function(err, files) {  
   /*Se recorre la estructura*/
      var pagina='<!doctype html><html><head></head><body>';
      for(var x=0;x<files.length;x++) {
          pagina+='<img src="fotos/'+files[x]+'"><br>';
      }
      pagina+='<br><a href="/">Retornar</a></body></html>';
	  //Se responde
      res.send(pagina);        
   });
});



module.exports = router;
