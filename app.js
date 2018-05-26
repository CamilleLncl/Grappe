

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accueilRouter = require('./routes/accueil');
var statRouter = require('./routes/statistiques');
var gestionRouter = require('./routes/gestion');

var app = express();
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'nl1-ss1.a2hosting.com',
  user     : 'grappeah_admin',
  password : 'Grappehosting42@',
  database : 'grappeah_BDD_Tempo'
});
connection.connect(function(err){
  console.log(err);
if(!err) {
    console.log("Database is connected ... ");
} else {
    console.log("Error connecting database ... ");
}
});*/

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'nl1-ss1.a2hosting.com',
  user     : 'grappeah_admin',
  password : 'k7d8X3A4nj',
  database : 'grappeah_BDD_Tempo'
});

connection.connect(function(err){
  console.log(err);
if(!err) {
    console.log("Database is connected ... ");
} else {
    console.log("Error connecting database ... ");
}
});

/*connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/

connection.end();
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', accueilRouter);
app.use('/statistiques', statRouter);
app.use('/gestion', gestionRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
