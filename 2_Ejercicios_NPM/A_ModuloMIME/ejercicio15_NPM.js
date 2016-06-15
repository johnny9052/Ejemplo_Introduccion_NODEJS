var http = require('http');
var url = require('url');
var fs = require('fs');

//Con la libreria cargada, se tiene accceso a todos los tipos posibles de MIME, 
//y no solo a los 6 que se habian especificado
var mime = require('mime');

var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = 'public' + objetourl.pathname;

    if (camino == 'public/')
        camino = 'public/index.html';
    fs.exists(camino, function (existe) {
        console.log(camino + ' ' + existe);
        if (existe) {
            fs.readFile(camino, function (error, contenido) {
                if (error) {
                    respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                    respuesta.write('Error interno');
                    respuesta.end();
                } else {
                    //Tambien cambia la forma de determinar el tipo de MIME, por esta
                    var tipo = mime.lookup(camino);
                    console.log(tipo);
                    respuesta.writeHead(200, {'Content-Type': tipo});
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });
        } else {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
            respuesta.end();
        }
    });
});

servidor.listen(8888);

console.log('Servidor web iniciado');