var http=require('http');


//SE CREA EL SERVIDOR, QUE SE QUEDARA ESCUCHANDO CUALQUIER TIPO DE PETICION. 
var servidor=http.createServer(function(pedido,respuesta){
	//El 200 es el codigo que uno responde cuando la conexion fue exitosa
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
	//Podemos llamar N veces a write antes de llamar a END
    respuesta.write('<!doctype html><html><head></head>'+
                    '<body><h1>Sitio en desarrollo</h1></body></html>');
    respuesta.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');

//Abrir el navegador e ingresar a localhost:8888