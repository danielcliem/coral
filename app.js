/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var homepage = require('./routes/homepage');
var newPost = require('./routes/newPost');
var newWeb = require('./routes/newWeb');
var discover = require('./routes/discover');
var activity = require('./routes/activity');
var account = require('./routes/account');
var web = require('./routes/web');
//action routes


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

//regular page routes
app.get('/', index.view);
app.get('/homepage.handlebars', homepage.view);
app.get('/newPost.handlebars', newPost.view);
app.get('/newWeb.handlebars', newWeb.view);
app.get('/discover.handlebars', discover.view);
app.get('/activity.handlebars', activity.view);
app.get('/account.handlebars', account.view);
app.get('/web.handlebars', web.view);

//action routes
app.get('/addWeb', newWeb.addWeb);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
