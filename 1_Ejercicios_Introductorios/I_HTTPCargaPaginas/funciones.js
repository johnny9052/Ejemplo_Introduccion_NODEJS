/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Modulo que me permite manipular infomracion de la URL de entrada*/
var url = require('url');
/*Modulo que me permite leer archivos*/
var fs = require('fs');
/*Variable que gestionara el servidor*/
var servidor;

function configurarServidor() {
    servidor = http.createServer(function (entrada, respuesta) {
        var ruta = definirRuta(entrada);
        //Validamos si la pagina solicitada existe
        fs.exists(ruta, function (existe) {
            //Si la encontro
            if (existe) {
                cargarPagina(ruta, respuesta);
            }
            //Si no existe respondemos error 404
            else {
                mostrarError(respuesta);
            }
        });
    });
}


function iniciarServidor() {
    servidor.listen(8888);
    console.log('Servidor web iniciado');
}



function definirRuta(entrada) {
    //Se obtiene la URL
    var objetourl = url.parse(entrada.url);
    //Se concatena el nombre de la carpeta static con la pagina solicitada
    var ruta = 'static' + objetourl.pathname;
    //Si no solicitaron ninguna pagina en especial?
    if (ruta === 'static/') {
        ruta = 'static/index.html';
    }
    return ruta;
}


function cargarPagina(ruta, respuesta) {
    //Lea el archivo index  
    fs.readFile(ruta, function (error, contenidoArchivo) {
        //Si sucede un error leyendo el archivo, muestre error 500
        if (error) {
            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
            respuesta.write('Error interno');
            respuesta.end();
        } else {
            //Si lo pudo leer bien, codigo 200 y se manda el archivo
            respuesta.writeHead(200, {'Content-Type': 'text/html'});
            respuesta.write(contenidoArchivo);
            respuesta.end();
        }
    });
}


function mostrarError(respuesta) {
    respuesta.writeHead(404, {'Content-Type': 'text/html'});
    respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
    respuesta.end();
}


//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;
exports.iniciarServidor = iniciarServidor;