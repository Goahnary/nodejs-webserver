const path = require('path');
const http = require('http');
const fs = require('fs');

var dir = path.join(__dirname, 'html');

var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

function onRequest(request, response) {

	var reqpath = request.url.toString().split('?')[0];

	if (request.method !== 'GET') {
        response.statusCode = 501;
        response.setHeader('Content-Type', 'text/plain');
        return response.end('Method not implemented');
    }
	
	if (fs.existsSync('html' + request.url) || request.url === '/' || fs.existsSync('html' + request.url + '/index.html'))
	//Does the file exist?
	{
		var file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));

		var type = mime[path.extname(file).slice(1)] || 'text/plain';

	    response.writeHead(200, {"Content-Type": type});

		var html = fs.readFileSync(file, 'utf8');
		
		response.write(html);

	} else {
		
		response.writeHead(404, {"Content-Type": "text/html"});

		//get 404 page
		var four0four = fs.readFileSync('html/404.html', 'utf8');

		response.write(four0four);
	}
	response.end();
}

http.createServer(onRequest).listen(8000);