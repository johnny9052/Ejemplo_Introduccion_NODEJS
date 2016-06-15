var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');

//Lista de archivos que seran soportados en la transeferencia
var mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  : 'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

var servidor=http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
    var camino='public13'+objetourl.pathname;
    if (camino=='public13/')
        camino='public13/index.html';
    encaminar(pedido,respuesta,camino);
});

servidor.listen(8888);


function encaminar (pedido,respuesta,camino) {
	
	//Se enruta o encamina segun la solicitud: cargar, leer o cargar html --> default
    switch (camino) {
        case 'public13/cargar': {
            grabarComentarios(pedido,respuesta);
            break;
        }    
        case 'public13/leercomentarios': {
            leerComentarios(respuesta);
            break;
        }            
        default : {  
            fs.exists(camino,function(existe){
                if (existe) {
                    fs.readFile(camino,function(error,contenido){
                        if (error) {
                            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                            respuesta.write('Error interno');
                            respuesta.end();                    
                        } else {
                            var vec = camino.split('.');
                            var extension=vec[vec.length-1];
                            var mimearchivo=mime[extension];
                            respuesta.writeHead(200, {'Content-Type': mimearchivo});
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
        }
    }    
}

//Funcion que captura los datos, conviertiendolos a json
function grabarComentarios(pedido,respuesta) {
    var info = '';
	//Se leen los datos
    pedido.on('data', function(datosparciales){
         info += datosparciales;
    });
	
	//Cuando los lee, se genera un html con la info, y un boton para regresar al index. 
    pedido.on('end', function(){
        var formulario = querystring.parse(info);
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        var pagina='<!doctype html><html><head></head><body>'+
                   'Nombre:'+formulario['nombre']+'<br>'+
                   'Comentarios:'+formulario['comentarios']+'<br>'+
                   '<a href="index.html">Retornar</a>'+
                   '</body></html>';
        respuesta.end(pagina);
		
		//Cuando se muestra la info al usuario, se almacena en un archivo
        grabarEnArchivo(formulario); 
    });    
}

function grabarEnArchivo(formulario) {
	//Se capturan los datos
    var datos='nombre:'+formulario['nombre']+'<br>'+
              'comentarios:'+formulario['comentarios']+'<hr>';
    //Se crea el archivo y se concatena la informacion al final del docuemtno
    fs.appendFile('public13/visitas.txt',datos,function(error){
        if (error)
            console.log(error);
    });
}

//Se leen los comentarios, y se muestran en una pagina html
function leerComentarios(respuesta) {
	//Se lee el documento
    fs.readFile('public13/visitas.txt',function (error,datos) {		
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>');
		//Se concatena a la pagina toda la informacion del documento. 
        respuesta.write(datos);
        respuesta.write('</body></html>');
        respuesta.end();          
    });
}

console.log('Servidor web iniciado');