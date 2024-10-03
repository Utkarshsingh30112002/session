const express = require('express');
const app = express();


app.get('/', (req, res) => {     // Define the route for the root URL
  res.send('Hello World!');
});

app.post('/signup',(req,res)=>{
  res.send("SignedUp Successfully")
})

app.listen(3001, () => {                                             // Start the server on port 3001
  console.log('Express server running on http://localhost:3001/');      
});
