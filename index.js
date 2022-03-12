var http = require('http');

var port = process.env.port || 8080;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(port, ()=>{
    console.log("... port %d in %s mode", app.address().port, app.settings.env);
});