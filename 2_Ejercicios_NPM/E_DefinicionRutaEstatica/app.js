/*Se define la variable _dirname como global para que el IDE no lo pinte 
 * con un warning*/

/* global __dirname */

/*Se carga el modulo express*/
var express = require('express');
/*Se define una instancia del express*/
var app = express();


/*Ruta  donde se encuentra la vista (Archivos estaticos como html, css, js, etc)
 * __dirname es una variable global que indica la raiz de todo el proyecto*/
app.use(express.static(__dirname + '/public'));

/*Se inicia el servidor*/
var server = app.listen(8888, function () {
    console.log('Servidor web iniciado');
});