/*Se define la variable _dirname como global para que el IDE no lo pinte 
 * con un warning*/

/* global __dirname */

/*Se carga modulo del framework Express*/
var express = require('express');
/*Se crea una instancia del framework*/
var app = express();
var server;

function configurarServidor() {
    /*Ruta  donde se encuentra la vista (Archivos estaticos como html, css, js, etc)
     * __dirname es una variable global que indica la raiz de todo el proyecto*/
    app.use(express.static(__dirname + '/public'));

    //Se inicia el servidor
    server = app.listen(8888, function () {
        console.log('Servidor web iniciado');
    });
}



//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;