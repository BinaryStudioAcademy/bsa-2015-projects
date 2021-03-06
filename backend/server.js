var path = require('path');
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

staticPath = path.normalize(__dirname + '/../bower_components');

app.use('/bower_components', express.static(staticPath));
app.use('/', express.static(__dirname + '/../public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./routes/index.js')(app);

var server = app.listen(3080);
console.log('server start on port 3080');

module.exports = app;