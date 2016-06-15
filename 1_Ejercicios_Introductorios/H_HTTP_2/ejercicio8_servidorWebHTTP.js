var http = require('http');
var url = require('url');

var servidor = http.createServer(function (pedido, respuesta) {
    //Se obtiene la url o peticion del cliente para poder descomponerla en partes
    var objetourl = url.parse(pedido.url);
    console.log('camino completo del recurso y parametros:' + objetourl.path);
    console.log('solo el camino y nombre del recurso     :' + objetourl.pathname)
    console.log('parametros del recurso                  :' + objetourl.query)
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    respuesta.write('<!doctype html><html><head></head><body>Hola mundo</body></html>');
    respuesta.end();
});

servidor.listen(8888);


//Acceder al navegador e ingresar http://localhost:8888/carpeta1/pagina1.html?parametro1=10&metro2=20
console.log('Servidor web iniciado');