//Modulo file system para la creacion de archivos. 
var fs = require('fs');

var rutaArchivo = 'archivo1.txt';
var contenidoArchivo = 'linea 1\nLinea 2';


function crearArchivo() {
    /*(nombre archivo, contenido del archivo, funcion que se ejecuta cuando 
     * termina la creacion del archivo)*/
    fs.writeFile(rutaArchivo, contenidoArchivo, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('El archivo fue creado');
        }
    });
}

//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.crearArchivo = crearArchivo;