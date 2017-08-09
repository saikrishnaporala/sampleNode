var express = require('express'),
  logger = require('morgan'),
  MONGOOSE = require('mongoose'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  session = require('express-session');

  MONGOOSE.connect('mongodb://localhost:27017/tracker');


var routes = require('./routes/index'),
  error = require('./routes/error'),
  requireSession = require('./routes/session'),
  charts = require('./routes/charts'),
  cors = require('./routes/cors');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(cookieParser());
app.use(session({
  secret: '483e2f65e8d318c47974fd19cca08a98', // valar morghulis,
  resave: false,
  saveUninitialized: true
}));

app.use('/*', cors);
app.use('/', routes);
app.use('/charts', charts);

app.use(error(app.get('env')));

module.exports = app;
