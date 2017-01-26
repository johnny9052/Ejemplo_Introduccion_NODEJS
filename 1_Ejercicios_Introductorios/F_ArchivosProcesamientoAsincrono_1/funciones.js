
var fs = require('fs');

/*Ruta del archivo que sera leido*/
var rutaArchivo = 'archivo1.txt';


function iniciarLectura() {
    /*Ruta del archivo a leer, funcion que se ejecuta cuando lo lee*/
    fs.readFile(rutaArchivo, leer);
}


function leer(error, datos) {
    if (error) {
        console.log(error);
    } else {
        console.log(datos.toString());
    }
}


//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.iniciarLectura = iniciarLectura;

