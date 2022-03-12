var http = require('http');

var server_port = process.env.YOUR_PORT || process.env.PORT || 80;

var app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

app.listen(server_port,function() {
    console.log('Listening on  port %d',server_port);
});