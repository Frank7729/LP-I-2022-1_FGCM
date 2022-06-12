const express=require('express');
const app=express();
const port=3000;

app.get('/', (req, res)=>{
    res.send('Hola Mundo NodeJS Express');
});

app.listen(port, ()=>{
    console.log('Server listenning at http://127.0.0.1:3000');
});