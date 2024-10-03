const express=require('express')
const app=express()
app.use(express.json())

let wifiPass=""

app.post('/pass',(req,res)=>{
    let pass=req.body.pass
    if(!pass){
        res.send("please send a password")
    }
    else {
        wifiPass=pass
        console.log(wifiPass)
        res.send("password setup successfull")
    }
})

app.get('/pass',(req,res)=>{
    res.send(wifiPass)
})

app.put('/pass',(req,res)=>{
    let pass=req.body.pass
    if(!pass){
        res.send("please send a password")
    }
    else{
        wifiPass=pass
        console.log(pass)
        res.send("password setup successfull")
    }
})

app.delete('/pass',(req,res)=>{
    wifiPass=""
    res.send("Password deleted")
})

app.listen(3001)


    // Create: POST
    // Read: GET
    // Update: PUT or PATCH
    // Delete: DELETE