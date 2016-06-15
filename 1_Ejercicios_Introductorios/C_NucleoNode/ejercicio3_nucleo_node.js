//el OS brinda informacion del servidor, como memoria, procesador, sistema operativo, etc. 
var os=require('os');

console.log('Sistema operativo:'+os.platform());
console.log('Versión del sistema operativo:'+os.release());
console.log('Memoria total:'+os.totalmem()+' bytes');
console.log('Memoria libre:'+os.freemem()+' bytes');