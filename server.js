var connect
  , serveStatic
  , portNumber
  ;

connect     = require('connect');
serveStatic = require('serve-static');

portNumber = 8080;

connect()
  .use( serveStatic(__dirname) )
  .listen(portNumber);
console.log("Server running on : http://0.0.0.0:" + portNumber);
