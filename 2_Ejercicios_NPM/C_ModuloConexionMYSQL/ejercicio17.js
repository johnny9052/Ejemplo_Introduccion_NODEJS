var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

//Se importa el modulo npm MYSQL
var mysql = require('mysql');

//Se hace una conexion a la base de datos
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'base1'
});
//Se conecta a la base de datos
conexion.connect(function (error) {
    if (error)
        console.log('Problemas de conexion con mysql');
});

//Archivos soportados
var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};


//Se crea el servidor
var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = 'public' + objetourl.pathname;
    if (camino == 'public/')
        camino = 'public/index.html';
    encaminar(pedido, respuesta, camino);
});

servidor.listen(8888);


//Lo de siempre
function encaminar(pedido, respuesta, camino) {

    switch (camino) {
        case 'public/creartabla':
        {
            //Si se da en crear tabla
            crear(respuesta);
            break;
        }
        case 'public/alta':
        {
            //Si se da en alta
            alta(pedido, respuesta);
            break;
        }
        case 'public/listado':
        {
            //Si se da en listado
            listado(respuesta);
            break;
        }

        case 'public/consultaporcodigo':
        {
            //Si se da en consultar por codigo
            consulta(pedido, respuesta);
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

//Crear tabla
function crear(respuesta) {
    //Ejecuta la consulta, a partir de la conexion a la base de datos
    conexion.query('drop table if exists articulos', function (error, resultado) {
        if (error) {
            console.log(error);
            return;
        }
    });

    conexion.query('create table articulos (' +
            'codigo int primary key auto_increment,' +
            'descripcion varchar(50),' +
            'precio float' +
            ')', function (error, resultado) {
                if (error)
                    console.log(error);
            });

    //Se construye la respuesta al cliente
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    respuesta.write('<!doctype html><html><head></head><body>' +
            'Se creo la tabla<br><a href="index.html">Retornar</a></body></html>');
    respuesta.end();
}

//Almacenar un registro
function alta(pedido, respuesta) {

    //Se obtienen los datos que se enviaron por post
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });

    //Cuando termina de capturar y pasar los datos a JSON
    pedido.on('end', function () {

        var formulario = querystring.parse(info);

        //Se crea un objeto con la informacion capturada
        var registro = {
            descripcion: formulario['descripcion'],
            precio: formulario['precio']
        };

        //Se hace un insert mandado el objet completo
        conexion.query('insert into articulos set ?', registro, function (error, resultado) {
            if (error) {
                console.log(error);
                return;
            }
        });

        //Se responde al usuario
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>' +
                'Se cargo el articulo<br><a href="index.html">Retornar</a></body></html>');
        respuesta.end();
    });
}


function listado(respuesta) {
    //Se realiza la consulta, recibiendo por parametro filas los registros de la base de datos. 
    conexion.query('select codigo,descripcion,precio from articulos', function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        //Se recorren los registros obtenidos
        var datos = '';
        for (var f = 0; f < filas.length; f++) {
            datos += 'Codigo:' + filas[f].codigo + '<br>';
            datos += 'Descripcion:' + filas[f].descripcion + '<br>';
            datos += 'Precio:' + filas[f].precio + '<hr>';
        }

        //Se responde
        respuesta.write('<!doctype html><html><head></head><body>');
        respuesta.write(datos);
        respuesta.write('<a href="index.html">Retornar</a>');
        respuesta.write('</body></html>');
        respuesta.end();
    });
}


function consulta(pedido, respuesta) {

    //Se obtienen datos
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });

    pedido.on('end', function () {

        //Se obtiene el codigo
        var formulario = querystring.parse(info);
        var dato = [formulario['codigo']];


        //Se manda el codigo en la busqueda
        conexion.query('select descripcion,precio from articulos where codigo=?', dato, function (error, filas) {
            if (error) {
                console.log('error en la consulta');
                return;
            }
            //Se responde
            respuesta.writeHead(200, {'Content-Type': 'text/html'});

            //Se lee el registro obtenido y se sacan sus datos
            var datos = '';
            if (filas.length > 0) {
                datos += 'Descripcion:' + filas[0].descripcion + '<br>';
                datos += 'Precio:' + filas[0].precio + '<hr>';
            } else {
                datos = 'No existe un art�culo con dicho codigo.';
            }

            //Se responde
            respuesta.write('<!doctype html><html><head></head><body>');
            respuesta.write(datos);
            respuesta.write('<a href="index.html">Retornar</a>');
            respuesta.write('</body></html>');
            respuesta.end();
        });

    });

}

console.log('Servidor web iniciado');