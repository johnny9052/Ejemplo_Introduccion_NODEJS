var http=require('http');
var url=require('url');
var fs=require('fs');

var servidor=http.createServer(function(pedido,respuesta){
	//Se obtiene la URL
    var objetourl = url.parse(pedido.url);
	//Se concatena el nombre de la carpeta static con la pagina solicitada
    var camino='static'+objetourl.pathname;
	//Si no solicitaron ninguna pagina en especial?
    if (camino=='static/')
        camino='static/index.html';
	
	//Validamos si la pagina solicitada existe
    fs.exists(camino,function(existe){
		//Si la encontro
        if (existe) {
			//Lea el archivo index
            fs.readFile(camino,function(error,contenido){
				//Si sucede un error leyendo el archivo, muestre error 500
                if (error) {
                    respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                    respuesta.write('Error interno');
                    respuesta.end();                    
                } else {
					//Si lo pudo leer bien, codigo 200 y se manda el archivo
                    respuesta.writeHead(200, {'Content-Type': 'text/html'});
                    respuesta.write(contenido);
                    respuesta.end();
                }
            });			
        } 
		//Si no existe respondemos error 404
		else {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');        
            respuesta.end();
        }
    });
});

servidor.listen(8888);

console.log('Servidor web iniciado');