/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Modulo que me permite manipular infomracion de la URL de entrada*/
var url = require('url');
/*Modulo que me permite leer archivos*/
var fs = require('fs');
/*Variable que gestionara el servidor*/
var servidor;
/*Variabel que gestionara la conexion de la base de datos*/
var conexion;
//Con la libreria cargada, se tiene accceso a todos los tipos posibles de MIME, 
//y no solo a los 6 que se habian especificado
var mime = require('mime');


/*Con el ./ se indica que el archivo que se va a necesitar se encuentra en la 
 * misma carpeta, ademas cuando no se coloca esto NODE busca en su nucleo dicho
 * repositorio */
var dao = require('./dao');


function configurarServidor() {

    dao.conectardb();

    servidor = http.createServer(function (entrada, respuesta) {

        var ruta = definirRuta(entrada);

        switch (ruta) {
            case 'static/creartabla':
            {
                //Si se da en crear tabla
                dao.crear(respuesta);
                break;
            }
            case 'static/alta':
            {
                //Si se da en alta
                dao.alta(entrada, respuesta);
                break;
            }
            case 'static/listado':
            {
                //Si se da en listado
                dao.listado(respuesta);
                break;
            }

            case 'static/consultaporcodigo':
            {
                //Si se da en consultar por codigo
                dao.consulta(entrada, respuesta);
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



//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;
exports.iniciarServidor = iniciarServidor;





