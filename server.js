const express = require('express');
const mongoose = require('mongoose');


//iniciando o APP
const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser:true});


//Primeira rota
app.get('/',(req, res)=>
{
    res.send('Hello1');
});
app.listen(3001);