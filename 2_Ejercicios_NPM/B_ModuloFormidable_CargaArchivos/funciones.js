/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Modulo que me permite manipular infomracion de la URL de entrada*/
var url = require('url');
/*Modulo que me permite leer archivos*/
var fs = require('fs');
/*Variable que gestionara el servidor*/
var servidor;
//Con la libreria cargada, se tiene accceso a todos los tipos posibles de MIME, 
//y no solo a los 6 que se habian especificado
var mime = require('mime');
//Se añade la referencia a formidable
var formidable = require('formidable');


function configurarServidor() {
	 servidor = http.createServer(function (entrada, respuesta) {
        var ruta = definirRuta(entrada);

        switch (ruta) {

            case 'static/subir':
            {
                //Si se da en subir, se llama  a la funcion subir
                subir(entrada, respuesta);
                break;
            }

            //Si es listado fotos, se encarga de llamar a la funcion listar
            case 'static/listadofotos':
            {
                listar(respuesta);
                break;
            }

            default:
            {
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
            }
        }


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
            /*Tambien cambia la forma de determinar el tipo de MIME, por esta*/

            /*Se obtienen todos los tipos de dato que se esten tratando 
             * de cargar en el html*/
            var tipo = mime.lookup(ruta);
            /*Los muestro por consola*/
            console.log(tipo);
            /*Respondo*/
            respuesta.writeHead(200, {'Content-Type': tipo});
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


function subir(pedido,respuesta){
    //Se crea una instancia de formidable
	var entrada=new formidable.IncomingForm();
	//Se define la ruta donde quedara el archivo
	entrada.uploadDir='upload';
	//Se le asocian los datos que llegaron (incluyendo la imagen)
	entrada.parse(pedido);
	
	//Cuando el archivo esta listo para ser almacenado
    entrada.on('fileBegin', function(field, file){
		//Se define la ruta pero ahora con el nombre del archivo
        file.path = "./static/upload/"+file.name;
    });	
	
	//Cuando ya el archivo se almaceno en el servidor
    entrada.on('end', function(){
		respuesta.writeHead(200, {'Content-Type': 'text/html'});
		respuesta.write('<!doctype html><html><head></head><body>'+
		                'Archivo subido<br><a href="index.html">Retornar</a></body></html>');		
		respuesta.end();
    });	
}

function listar(respuesta) {
  //Funcion que mapea todo el contenido de una carpeta especificada, donde el parametro
  //archivos tiene el nombre de cada uno de los archivos encontrados
  fs.readdir('./static/upload/',function (error,archivos){
	  var fotos='';
	  
	  //Por cada archivo que encuentre
	  for(var x=0;x<archivos.length;x++) {
		  //se crea una etiqueta img con la ruta del archivo encontrado
		  fotos += '<img src="upload/'+archivos[x]+'"><br>';
	  }
	  
	  //Se responde al cliente el listado de todas las imagenes
	  respuesta.writeHead(200, {'Content-Type': 'text/html'});
	  respuesta.write('<!doctype html><html><head></head><body>'+
	  fotos+
	  '<a href="index.html">Retornar</a></body></html>');		
	  respuesta.end();	  
  });	
}


//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;
exports.iniciarServidor = iniciarServidor;