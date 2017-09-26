var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongoskin');

const api = require('./server/routes/api');
const mail = require('./server/routes/mail');
const contact = require('./server/routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');
app.disable('x-poweres-by');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//create common db connection
/*app.use((req, res, next)=>{
  var db = mongo.db('mongodb://localhost:27017/MessaginService', { native_parser: true });
  req.msDB = db;
  console.log(req.msDB.name);
  next();
  db.close();
});*/

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './server/public')));

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid JWT on any routes that it is applied to.
/*var authCheck = jwt({
  secret: new Buffer('YOUR_AUTH0_SECRET', 'base64'),
  audience: 'YOUR_AUTH0_CLIENT_ID'
});

//how to check if authenticated
app.get('/api/users', authCheck, function(req, res) {
  res.json(users);
});*/

// API location
app.use('/api', api);
app.use('/mail', mail);
//app.use('/contact', contact);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(function(req, res,next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

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

app.listen(9999);