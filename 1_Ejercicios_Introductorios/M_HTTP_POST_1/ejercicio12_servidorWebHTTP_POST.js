var http = require('http');
var url = require('url');
var fs = require('fs');
//Import necesario para recibir y analizar los datos que llegan por post
var querystring = require('querystring');

var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};

var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = 'public12' + objetourl.pathname;
    if (camino == 'public12/')
        camino = 'public12/index.html';
    encaminar(pedido, respuesta, camino);
});

servidor.listen(8888);


//Funcion que determina la ruta del archivo al cual se le estan mandando los datos por POST,
//es decir, quien recibe dichos datos. 
function encaminar(pedido, respuesta, camino) {
    console.log(camino);
    //Se valida la solicitud
    switch (camino) {
        //Si se mandaron los datos por POST
        case 'public12/recuperardatos':
        {
            recuperar(pedido, respuesta);
            break;
        }
        //Si es la carga de una pagina
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

//Funcion que lee los datos enviados por post
//Pedido = URL que contiene toda la info      Respuesta = Referencia a donde se responde los datos
function recuperar(pedido, respuesta) {

    var info = '';

    //Del pedido primero se extrae su informacion, a medida que van llengado los datos
    pedido.on('data', function (datosparciales) {
        //Se va concatenando en info, los datos que van llegando. Ejemplo: nombre=juan&clave=123456
        info += datosparciales;
    });

    //Luego, del pedido cuando se reciben todos los datos se ejecuta el END. 
    pedido.on('end', function () {
        //Se parsean los datos a JSON, ejemplo:   {nombre:'juan',clave:'123456'}
        var formulario = querystring.parse(info);

        //Ya con los datos en JSON, se pueden leer formulario['nombre']   formulario['clave']  
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        var pagina = '<!doctype html><html><head></head><body>' +
                'Nombre de usuario:' + formulario['nombre'] + '<br>' +
                'Clave:' + formulario['clave'] + '<br>' +
                '<a href="index.html">Retornar</a>' +
                '</body></html>';
        //Se responde al cliente. 
        respuesta.end(pagina);
    });
}

console.log('Servidor web iniciado');