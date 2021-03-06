var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var plantAllFetch = require('./routes/PlantAllFetch');
var plantOneFetch = require('./routes/PlantOneFetch');
var plantTwoFetch = require('./routes/PlantTwoFetch');
var plantThreeFetch = require('./routes/PlantThreeFetch');
//var PlantFourFetch = require('./routes/PlantFourFetch');
var MSSQL = require('./routes/MSSQL');
var GridFetch = require('./routes/GridFetch');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/test', test);
app.use('/GridFetch', GridFetch);
app.use('/plantAllFetch', plantAllFetch);
app.use('/plantOneFetch', plantOneFetch);
app.use('/plantTwoFetch', plantTwoFetch);
app.use('/plantThreeFetch', plantThreeFetch);
//app.use('/plantFourFetch', PlantFourFetch);
app.use('/MSSQL', MSSQL);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
