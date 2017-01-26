/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Variable que controlara el servidor*/
var servidor;

function configurarServidor() {

//SE CREA EL SERVIDOR, QUE SE QUEDARA ESCUCHANDO CUALQUIER TIPO DE PETICION. 
    servidor = http.createServer(function (entrada, respuesta) {
        //El 200 es el codigo que uno responde cuando la conexion fue exitosa
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        //Podemos llamar N veces a write antes de llamar a END
        respuesta.write('<!doctype html><html><head></head>' +
                '<body><h1>Sitio en desarrollo</h1></body></html>');
        /*Se escribe la respuesta*/
        respuesta.end();
    });
}


function iniciarServidor() {
    servidor.listen(8888);
    console.log('Servidor web iniciado');
}

//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;
exports.iniciarServidor = iniciarServidor;
