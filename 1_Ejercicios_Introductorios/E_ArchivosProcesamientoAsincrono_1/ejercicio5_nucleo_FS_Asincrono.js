//Modulo file system para la creacion de archivos. 
var fs = require('fs');


//(nombre archivo, contenido del archivo, funcion que se ejecuta cuando termina la creacion del archivo)
fs.writeFile('./archivo1.txt', 'linea 1\nLinea 2', function (error) {
    if (error)
        console.log(error);
    else
        console.log('El archivo fue creado');
});

console.log('Ultima linea del programa');