var http = require('http'); //appel bibliotheque http de node js

var server = http.createServer(function(req, res) { 
  res.writeHead(200);
  res.end(index.html);
});
server.listen(9090);

