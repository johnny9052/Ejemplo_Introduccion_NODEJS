
var fs = require('fs');

/*Ruta del archivo que sera leido*/
var folder = 'archivos';


function iniciarLectura() {

    fs.readdir(folder, function (error, files) {

        var cadena = '';
        for (var i = 0; i < files.length; i++) {
            var nombre = files[i];
            var contenido = fs.readFileSync(folder + '/' + nombre).toString();
            console.log("Archivo: " + nombre + " Contendio:" + contenido);
        }

    });
}




//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.iniciarLectura = iniciarLectura;

