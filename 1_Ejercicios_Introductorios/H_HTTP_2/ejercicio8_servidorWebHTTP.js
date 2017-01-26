/*Con el ./ se indica que el archivo que se va a necesitar se encuentra en la 
 * misma carpeta, ademas cuando no se coloca esto NODE busca en su nucleo dicho
 * repositorio */
var funciones = require('./funciones');

funciones.configurarServidor();
funciones.iniciarServidor();

//Acceder al navegador e ingresar http://localhost:8888/carpeta1/pagina1.html?parametro1=10&metro2=20
