const http = require('http');

// Function to handle incoming requests
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/signup') {
    let body = '';

    // Collect the data
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // When all data is received
    req.on('end', () => {
      try {
        // Parse the JSON body
        const data = JSON.parse(body);
        
        // Check if age is provided
        if (data.age !== undefined) {
          if (data.age >= 18) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'You are an adult! and you can signup' }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'You are a minor.' }));
          }
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Age is required in the body.' }));
        }
      } catch (err) {
        // If JSON parsing fails
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON format' }));
      }
    });
  } else {
    // Handle other requests or invalid methods
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Start the server
server.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
