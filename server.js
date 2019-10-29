var http = require('http');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write('{"text":"Hello, world!"}');
	response.end();
}

http.createServer(onRequest).listen(8000);