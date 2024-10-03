const http = require('http');

// Create a server with the 'http' module
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');

  }else if(req.method === 'POST' && req.url === '/signup'){

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('SignedUP Successfully');

  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');

  }
});

// Listen on port 3001
server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});
