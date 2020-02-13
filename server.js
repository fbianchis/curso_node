const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 

//iniciando o APP
const app = express();

mongoose.connect
(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser:true
    }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira rota
app.get('/',(req, res)=>
{
    Product.create(
        {
            title: 'Reactive Native',
            description: 'Build Native apps with React ',
            url: 'http://github.com/facebook/react-native',
        });
    return res.send('Hello1');
});
app.listen(3001);