
/*Se carga modulo del framework Express*/
var express = require('express');
/*Se crea una instancia del framework*/
var app = express();
var server;

function configurarServidor() {
    //Se inicia el servidor
    server = app.listen(8888, function () {
        console.log('Servidor web iniciado');
    });
}

/*Se define la raiz del proyecto, 
 * (entrada=quien manda solicitud, 
 * respuesta=respuesta que se le dal al solicitante)*/
app.get('/', function (entrada, respuesta) {
    respuesta.send('<!doctype html><html><head></head><body><h1>' +
            'Mi primer pagina con EXPRESS!!</h1></body></html>');
});

//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;