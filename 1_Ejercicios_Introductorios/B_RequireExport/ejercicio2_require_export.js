/*Con el ./ se indica que el archivo que se va a necesitar se encuentra en la 
 * misma carpeta, ademas cuando no se coloca esto NODE busca en su nucleo dicho
 * repositorio */
var mat = require('./matematica');

console.log('La suma de 2+2=' + mat.sumar(2, 2));
console.log('La resta de 4-1=' + mat.restar(4, 1));
console.log('La divisi�n de 6/3=' + mat.dividir(6, 3));
console.log('El valor de PI=' + mat.PI);