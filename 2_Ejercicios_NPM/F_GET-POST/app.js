var express = require('express');
var app=express();

//Se importa el bodyPARSER
var bodyParser = require('body-parser');

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));



//CAPTURA DE DATOS POR POST
app.post('/mostrarnumeros', function (req, res) {
	//Se capturan los datos
    var num1=req.body.numero1;
    var num2=req.body.numero2;
    num1=parseInt(num1);
    num2=parseInt(num2);
    var pagina='<!doctype html><html><head></head><body>';
    for(var x=num1;x<=num2;x++)
        pagina += '<a href="/mostrartabla?valor='+x+'">'+x+'</a>'+' - ';
    pagina += '</body></html>';
	
	//Se responde
    res.send(pagina);    
})


//CAPTURA DE DATOS POR GET
app.get('/mostrartabla', function (req, res) {
	//Se captura el dato
    var num=req.query.valor;
	
    num=parseInt(num);
	
    var pagina='<!doctype html><html><head></head><body>';
    for(var x=1;x<=10;x++) {
        var tabla=num * x;
        pagina += num + ' * ' + x + ' = ' + tabla + '<br>';
    }    
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
	//Se responde al cliente
    res.send(pagina);    
})




var server=app.listen(8888,function(){
    console.log('Servidor web iniciado');
});