var fs=require('fs');

function leer(error,datos){
    if (error) {
        console.log(error);
    }	
    else {
        console.log(datos.toString());
    }
}

/*Ruta del archivo a leer, funcion que se ejecuta cuando lo lee*/
fs.readFile('./archivo1.txt',leer);

console.log('�ltima l�nea del programa');