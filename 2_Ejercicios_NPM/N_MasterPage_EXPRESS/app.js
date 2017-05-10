var express = require('express');


/*Se importa la libreria HBS para la vistas, y con esto se puede manejar el 
 * master page y adicionalmente se pueden enviar datos JSON del server a la 
 * pagina cuando esta es solicitada, permitiendo cargar selects, etc*/
var exphbs = require('express-handlebars');


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

/*Se indica que la extension que leera sera .hbs, y que el layout por defecto 
 * sera el masterPage.hbs*/
/*La ruta a partials, indica segmento de otros archivos que se podran cargar 
 * dinamicamente en el master page, como el footer o el banner, etc*/
app.engine('.hbs', exphbs(
        {extname: '.hbs', 
         defaultLayout: 'masterPage',
         layoutsDir: __dirname + '/views/layouts/',
         partialsDir: __dirname + '/views/partials/'}));


app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
