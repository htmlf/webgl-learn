/* INDEX - main server code */

// required modules
var http = require('http');
var express = require('express');

// init server
var app = express();
var server = http.createServer(app);


// http interface
app.all('/', function(req, res) {
	res.sendFile(__dirname+'/assets/index.html');
});
app.use('/', express.static(__dirname+'/assets'));


// ready
server.listen(80, function() {
	console.log('web-opengl>> ready!');
});
