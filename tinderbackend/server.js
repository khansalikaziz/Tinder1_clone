import express from "express";
import mongoose from "mongoose";
import cards from './dbCards.js';
import Cors from 'cors';
//App Config
const app=express(); //creating instance
const port=process.env.PORT || 8001 ; // defining port
const connection_url=`mongodb+srv://admin:Salik9661874451@cluster0.y6j3n.mongodb.net/?retryWrites=true&w=majority`
//Middlewares
app.use(express.json());
app.use(Cors());
//Db config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
});
//Api endpoints
app.get('/',(req,res)=>res.status(200).send('Hello world'));  //root

app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;
    cards.create(dbCard,(err,data)=>{
       if(err){
           res.status(500).send(err)
       }else{
           res.status(201).send(data)
       }
    })

});

app.get('/tinder/card',(req,res)=>{
    const dbCard=req.body;
    cards.find((err,data)=>{
       if(err){
           res.status(500).send(err)
       }else{
           res.status(200).send(data)
       }
    })

});
//listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));