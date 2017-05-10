//Se importa el framework express y el enrutamiento para el envio de la informacion
var express = require('express');
var router = express.Router();

//Se importa el archivo js que tiene la conexion a la base de datos
var bd = require('./bd');


//Creacion de la tabla, donde /crearTabla es el nombre de la funcion. 
router.get('/creartabla', function (req, res, next) {
    //Borra la tabla si existe
    bd.query('drop table if exists articulos', function (error, resultado) {
        if (error) {
            console.log(error);
            return;
        }
    });
    /*Crea la tabla*/
    bd.query('create table articulos (' +
            'codigo int primary key auto_increment,' +
            'descripcion varchar(50),' +
            'precio float' +
            ')', function (error, resultado) {
                if (error) {
                    console.log(error);
                    return;
                }
            });

    /*Abrimos la pagina mensajearticulos que se encuentra en la vista, mandando por partametro
     la variable mensaje*/
    res.render('mensajearticulos', {mensaje: 'La tabla se creo correctamente.'});
});


//Alta de registros, pero solo cuando la solicitud llega por get
router.get('/alta', function (req, res, next) {
    /*Si se abre el formulario de alta de articulos*/
    res.render('altaarticulos');
});

//Alta de registros, pero solo cuando la solicitud llega por POST
router.post('/alta', function (req, res, next) {
    //Se crea un objeto con los datos de entrada
    var registro = {
        descripcion: req.body.descripcion,
        precio: req.body.precio
    };

    //Se realiza la insercion de los datos
    bd.query('insert into articulos set ?', registro, function (error, resultado) {
        if (error) {
            console.log(error);
            return;
        }
    });

    //Se abre la pagina mensaje articulos que se encuentra en la vista, enviando el dato mensaje
    res.render('mensajearticulos', {mensaje: 'La carga se efectuo correctamente'});
});


//Listado de registros
router.get('/listado', function (req, res, next) {

    //Se realiza la consulta
    bd.query('select codigo,descripcion,precio from articulos', function (error, filas) {
        if (error) {
            console.log('error en el listado');
            return;
        }

        /*Se abre la pagina listararticulos que se encuentra en la vista, mandando la
         variable filas que contiene todos los registros. Los atributos tienen el 
         mismo nombre que en la tabla*/
        res.render('listararticulos', {articulos: filas});
    });
});


//Consulta , carga el formulario de consulta
router.get('/consulta', function (req, res, next) {
    res.render('consultaarticulos');
});



/*Solicitud por post para buscar un elemento por su codigo*/
router.post('/consulta', function (req, res, next) {
    bd.query('select descripcion,precio from articulos where codigo=?', req.body.codigo, function (error, filas) {
        if (error) {
            console.log('error en la consulta');
            return;
        }
        if (filas.length > 0) {
            /*Si lo encuentra lista el elemento*/
            res.render('listadoconsulta', {articulos: filas});
        } else {
            /*Si no lo encuentra muestra mensaje indicando que no lo encontro*/
            res.render('mensajearticulos', {mensaje: 'No existe el codigo de articulo ingresado'});
        }
    });
});


//Modificacion, carga el formulario
router.get('/modificacion', function (req, res, next) {
    res.render('consultamodificacion');
});



//Busca el registro a modificar
router.post('/modificar', function (req, res, next) {
//Busca el registro a modificar	
    bd.query('select descripcion,precio,codigo from articulos where codigo=?', req.body.codigo, function (error, filas) {
        if (error) {
            console.log('error en la consulta');
            return;
        }
        if (filas.length > 0) {
            res.render('formulariomodifica', {articulos: filas});
        } else {
            res.render('mensajearticulos', {mensaje: 'No existe el codigo de articulo ingresado'});
        }
    });
});


router.post('/confirmarmodifica', function (req, res, next) {
    //Crea un objeto con los datos a modificar
    var registro = {
        descripcion: req.body.descripcion,
        precio: req.body.precio
    };

//Ejecuta la actualizacion
    bd.query('UPDATE articulos SET ? WHERE ?', [registro, {codigo: req.body.codigo}], function (error, filas) {
        if (error) {
            console.log('error en la consulta');
            console.log(error);
            return;
        }
        res.render('mensajearticulos', {mensaje: 'El articulo fue modificado'});
    });
});


module.exports = router;