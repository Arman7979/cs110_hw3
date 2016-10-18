const http = require('http');

const httpServer = http.createServer(function (req, res)
{
	if (req.url === '/hi'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Harut');
	res.end('Vardan');
 
 }
	else if (req.url === '/there'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Nigga');
	res.end('YOLO');
 }
	else if (req.url === '/whats'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('idk');
	res.end('cusoon');
 }
	else if (req.url === '/up'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('no problem');
	res.end('Napoleon');
	}
	else if (req.url === '/dude'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Chill');
	res.end('Finished');
 }
});
httpServer.listen(3001)