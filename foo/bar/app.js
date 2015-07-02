var express = require('express');
var app = express();

app.get('/', function(req, res) {res.send('hi');});
app.get('/log', function(req, res) {console.log('log...'); res.send('log received');});
var server = app.listen(8080);


process.on('SIGTERM', function() {
   console.log('SIGTERM received');
   server.close(function() {console.log('exited');});
});



console.log('the app is listening on 8080');
