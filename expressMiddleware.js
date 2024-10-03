const express = require('express');
const app = express();
app.use(express.json())



function checkAge(req,res,next){
    if(req.body.age){
        if(req.body.age>=18)next()
        else res.json("You are a minor")
    }
    else{
        res.json("enter a valid age")
    }
}

app.post('/signup',checkAge,(req,res)=>{
  res.json("You are an adult and you can signup")
})

app.listen(3001, () => {                                             // Start the server on port 3001
  console.log('Express server running on http://localhost:3001/');      
});