
/*Se carga modulo del framework Express*/
var express = require('express');

/*Se crea una instancia del framework*/
var app = express();

/*Se define la raiz del proyecto, 
 * (entrada=quien manda solicitud, 
 * respuesta=respuesta que se le dal al solicitante)*/
app.get('/', function (entrada, respuesta) {
    respuesta.send('<!doctype html><html><head></head><body><h1>' +
            'Mi primer pagina con EXPRESS!!</h1></body></html>');
});


//Se inicia el servidor
var server = app.listen(8888, function () {
    console.log('Servidor web iniciado');
});