
//Se carga el framework
var express=require('express');

//Se crea una instancia
var app=express();

//Se define la raiz de nuestro proyecto, (req=quien manda solicitud, res=respuesta que se le dal al solicitante)
app.get('/',function (req,res){
    res.send('<!doctype html><html><head></head><body><h1>'+
             'Mi primer pagina</h1></body></html>');
});

//Se inicia el servidor
var server=app.listen(8888,function(){
    console.log('Servidor web iniciado');
});