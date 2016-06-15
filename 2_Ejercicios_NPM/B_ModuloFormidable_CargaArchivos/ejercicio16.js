var http = require('http');
var url = require('url');
var fs = require('fs');

//Se a�ade la referencia a formidable
var formidable = require('formidable');

var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};


//Se crea el servidor que se quedara escuchando las peticiones
var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = 'public' + objetourl.pathname;
    if (camino == 'public/')
        camino = 'public/index.html';
    encaminar(pedido, respuesta, camino);
});

servidor.listen(8888);


function encaminar(pedido, respuesta, camino) {

    switch (camino) {
        case 'public/subir':
        {
            //Si se da en subir, se llama  a la funcion subir
            subir(pedido, respuesta);
            break;
        }

        //Si es listado fotos, se encarga de llamar a la funcion listar
        case 'public/listadofotos':
        {
            listar(respuesta);
            break;
        }
        default :
        {
            fs.exists(camino, function (existe) {
                if (existe) {
                    fs.readFile(camino, function (error, contenido) {
                        if (error) {
                            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                            respuesta.write('Error interno');
                            respuesta.end();
                        } else {
                            var vec = camino.split('.');
                            var extension = vec[vec.length - 1];
                            var mimearchivo = mime[extension];
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


function subir(pedido, respuesta) {
    //Se crea una instancia de formidable
    var entrada = new formidable.IncomingForm();
    //Se define la ruta donde quedara el archivo
    entrada.uploadDir = 'upload';
    //Se le asociancias los datos que llegaron (incluyendo la imagen)
    entrada.parse(pedido);

    //Cuando el archivo esta listo para ser almacenado
    entrada.on('fileBegin', function (field, file) {
        //Se define la ruta pero ahora con el nombre del archivo
        file.path = "./public/upload/" + file.name;
    });

    //Cuando ya el archivo se almaceno en el servidor
    entrada.on('end', function () {
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>' +
                'Archivo subido<br><a href="index.html">Retornar</a></body></html>');
        respuesta.end();
    });
}

function listar(respuesta) {
    //Funcion que mapea todo el contenido de una carpeta especificada, donde el parametro
    //archivos tiene el nombre de cada uno de los archivos encontrados
    fs.readdir('./public/upload/', function (error, archivos) {
        var fotos = '';

        //Por cada archivo que encuentre
        for (var x = 0; x < archivos.length; x++) {
            //se crea una etiqueta img con la ruta del archivo encontrado
            fotos += '<img src="upload/' + archivos[x] + '"><br>';
        }

        //Se responde al cliente el listado de todas las imagenes
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>' +
                fotos +
                '<a href="index.html">Retornar</a></body></html>');
        respuesta.end();
    });
}


console.log('Servidor web iniciado');