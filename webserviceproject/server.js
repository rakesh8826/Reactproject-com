var express=require('express');
var app=express();
app.get('/',function(req,res)
{
    res.sendfile('index.html');
})
app.get('/Home',function(req,res)
{
    res.sendfile('Home.html')
})
app.get('/registration',function(req,res)
{
    res.sendfile('registration.html')
})

app.listen(3001,()=>
{
    console.log("server is running");
})
