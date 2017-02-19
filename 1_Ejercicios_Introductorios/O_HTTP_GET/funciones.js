/*Modulo que me permite tener conexiones web*/
var http = require('http');
/*Modulo que me permite manipular infomracion de la URL de entrada*/
var url = require('url');
/*Modulo que me permite leer archivos*/
var fs = require('fs');
/*Variable que gestionara el servidor*/
var servidor;


/*Archivos soportados en la transferencia*/
var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};




function configurarServidor() {
    servidor = http.createServer(function (entrada, respuesta) {
        var ruta = definirRuta(entrada);


        switch (ruta) {
            case 'static/listanumeros':
            {
                listar(entrada, respuesta);
                break;
            }
            case 'static/listadotabla':
            {
                listarTablaMultiplicar(entrada, respuesta);
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
            /*Se separa por un split la ruta*/
            var vec = ruta.split('.');
            /*Se saca la extension del archivo*/
            var extension = vec[vec.length - 1];
            /*Añadimos la extension al grupo de extensiones*/
            var mimearchivo = mime[extension];
            //Si lo pudo leer bien, codigo 200 y se manda el archivo
            /*Se añade todo el paquete de extensiones*/
            respuesta.writeHead(200, {'Content-Type': mimearchivo});
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




function listar(entrada, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    var pagina = '<!doctype html><html><head></head><body>';
    for (var f = 1; f <= 20; f++) {
        //Se crean 20 enlaces, cada uno con su respectiva variable get, apuntanto a listadoTabla. 
        pagina += '<a href="listadotabla?num=' + f + '">' + f + '</a><br>';
    }
    pagina += '</body></html>';
    respuesta.end(pagina);
}





function listarTablaMultiplicar(pedido, respuesta) {
    //SE CAPTURA EL VALOR POR GET, EL TRUE SIEMPRE SE DEBE PASAR
    var valor = url.parse(pedido.url, true).query.num;

    respuesta.writeHead(200, {'Content-Type': 'text/html'});

    var pagina = '<!doctype html><html><head></head><body>';
    for (var f = 1; f <= 10; f++) {
        pagina += valor + '*' + f + '=' + (valor * f) + '<br>';
    }
    pagina += '</body></html>';
    respuesta.end(pagina);
}




//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;
exports.iniciarServidor = iniciarServidor;