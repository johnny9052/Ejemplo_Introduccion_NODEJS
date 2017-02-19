var os = require('os');

function memoriaDisponible() {
    console.log('La memoria disponible es :' + os.freemem());
}

function llenarMemoria() {
    var vec = new Array();
    for (var i = 0; i < 1000000; i++) {
        vec.push(i);
    }
    console.log("Se lleno la memoria");
}


//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.memoriaDisponible = memoriaDisponible;
exports.llenarMemoria = llenarMemoria;