/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Modulo que me permite manipular infomracion de la URL de entrada*/
var url = require('url');
/*Variable que gestionara el servidor*/
var servidor;


function configurarServidor() {
    //SE CREA EL SERVIDOR, QUE SE QUEDARA ESCUCHANDO CUALQUIER TIPO DE PETICION. 
    servidor = http.createServer(function (entrada, respuesta) {

        //Se obtiene la url o peticion del cliente para poder descomponerla en partes
        var objetourl = url.parse(entrada.url);

        var html = "<!doctype html><html><head></head><body>";
        html = html + "camino completo del recurso y parametros:" + objetourl.path + "<br>";
        html = html + "solo el camino y nombre del recurso:" + objetourl.pathname + "<br>";
        html = html + "parametros del recurso:" + objetourl.query + "<br>";
        html = html + "</body></html>";

        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write(html);
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
