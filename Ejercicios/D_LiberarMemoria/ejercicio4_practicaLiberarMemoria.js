var os=require('os');

console.log('La memoria disponible es :'+os.freemem());


var vec = new Array();

for (var i = 0;i<1000000;i++){
	vec.push(i);
}
	
console.log('La memoria disponible es :'+os.freemem());