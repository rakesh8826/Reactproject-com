const express =require('express');
const app =express();
var bodyParser =require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const CONNECTION_URL= "mongodb+srv://admin:admin@cluster0-qk1sh.mongodb.net/College?retryWrites=true&w=majority";
var database

app.get('/',(request,response)=>{
    database.collection("Student").find({}).toArray((error,result)=>{
        if(error){
            return response.status(500).send(error);
        }
        response.send(result);
    });

})
app.post('/addStudent',(request,response)=>{
    database.collection("Student").insertMany(request.body, (error,result) =>{
        if(error){
            return response.status(500).send(error);
        }
        response.send(result);
    });
})
app.get('/employee/:Gender',(request,response) => {
    let id = request.params.Gender;
    database.collection('Student').find({'Gender':parseInt(id)}).toArray((error,result) =>{
        if(error) {
            return response.status(500).find(error);
        }
        response.send(result);
    });
})
    
        

app.listen(3001,()=>{
    MongoClient.connect(CONNECTION_URL,{useNewUrlParser:true},(error,client)=>{
        if(error){
            throw error;
        }
    database =client.db("College");    
    console.log("Connected to "+'College' +"!");
    });
});
