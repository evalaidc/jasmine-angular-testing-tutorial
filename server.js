var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// allows access to servers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(morgan(dev));
app.use(express.static(__dirname + '/app'));

// sends our app to index.html in our director.
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// sets where the local host location or where our appliaction will be
app.listen(8080);
console.log('meet-irl is running on 8080');
