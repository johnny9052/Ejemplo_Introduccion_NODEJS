/*Se define que la variable _dirname es global, para que el IDE no la muestre
 * con un warning*/

/* global __dirname */

/*Se carga el modulo express*/
var express = require('express');
/*Se instancia el modulo*/
var app = express();
/*Se importa el modulo bodyPARSER para recibir datos por GET y POST*/
var bodyParser = require('body-parser');
/*extended: false significa que parsea solo string 
 * (no archivos, como imagenes por ejemplo)*/
app.use(bodyParser.urlencoded({extended: false}));

var server;



function configurarServidor() {

    /*Ruta  donde se encuentra la vista (Archivos estaticos como html, css, js, etc)
     * __dirname es una variable global que indica la raiz de todo el proyecto*/
    app.use(express.static(__dirname + '/public'));

    //Se inicia el servidor
    server = app.listen(8888, function () {
        console.log('Servidor web iniciado');
    });
}

/*CAPTURA DE DATOS POR POST*/
app.post('/mostrarnumeros', function (entrada, respuesta) {
    //Se capturan los datos
    var num1 = entrada.body.numero1;
    var num2 = entrada.body.numero2;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var pagina = '<!doctype html><html><head></head><body>';
    for (var x = num1; x <= num2; x++)
        pagina += '<a href="/mostrartabla?valor=' + x + '">' + 
            x + '</a>' + ' - ';
    pagina += '</body></html>';

    //Se responde
    respuesta.send(pagina);
    
});


//CAPTURA DE DATOS POR GET
app.get('/mostrartabla', function (entrada, respuesta) {
    //Se captura el dato
    var num = entrada.query.valor;

    num = parseInt(num);

    var pagina = '<!doctype html><html><head></head><body>';
    for (var x = 1; x <= 10; x++) {
        var tabla = num * x;
        pagina += num + ' * ' + x + ' = ' + tabla + '<br>';
    }
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
    //Se responde al cliente
    respuesta.send(pagina);
});



//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.configurarServidor = configurarServidor;

