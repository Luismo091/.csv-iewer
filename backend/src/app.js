const express = require('express')
const app = express();

app.get('/',(req, res)=>{
    res.send('HOLA');
});

app.post

app.listen(3000,()=>{
    console.log('Servidor encendido');
});