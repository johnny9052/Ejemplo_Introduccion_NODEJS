var express = require('express');
var app = express();


//Ruta  donde se encuentra la vista (Archivos estaticos como html, css, js, etc)
//__dirname es una variable global que indica la raiz de todo el proyecto
app.use(express.static(__dirname + '/public'));

var server = app.listen(8888, function () {
    console.log('Servidor web iniciado');
});