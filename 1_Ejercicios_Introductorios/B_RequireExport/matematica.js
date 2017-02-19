var PI = 3.14;

function sumar(x1, x2)
{
    return x1 + x2;
}

function restar(x1, x2)
{
    return x1 - x2;
}

function dividir(x1, x2)
{
    if (x2 === 0)
    {
        mostrarErrorDivision();
    } else
    {
        return x1 / x2;
    }
}

//Esta no es necesario exportarla
function mostrarErrorDivision() {
    console.log('No se puede dividir por cero');
}

//Habilita a las funciones para que sean llamadas o exportadas desde otros archivos 
exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.PI = PI; 