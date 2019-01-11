const app = require('./backend/app');
const http = require('http');
//const server = http.createServer(function(req, res)
//const server = http.createServer((req, res)=>
//{
//res.writeHead(200, {'Content-Type': 'text/plain'});
//res.write('Hello World!');
//res.end();
//});

const server = http.createServer(app);
server.listen(process.env.PORT || "2");
