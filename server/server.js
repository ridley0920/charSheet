var 
  http            = require('http'),
  https           = require('https'),
  path            = require('path'),
  socket          = require('socket.io'),
  express         = require('express'),
  morgan          = require('morgan'),
  MongoClient     = require('mongodb').MongoClient, 
  assert          = require('assert'),
  fs              = require('fs');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});


var app = module.exports = express();
var server = http.Server(app);
var io = socket(server);


//server.listen(80);

app.get('/', function (req, res) {
  res.sendFile('F:/Programming/charSheet/front/index.jade');
});

/*io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/

/*app.use('/h1', require('../server/routes/chars.js'));
app.use('/', require('../server/routes/defaults'));*/

if(!module.parent)
{
  //app.listen(3001);
  server.listen(3001);
  console.log('Dev Server started on port 3001');
}