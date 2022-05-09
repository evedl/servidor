const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

//creamos servidor
const app = express();


//ruta principal 
app.get('/', (req, res) => {
    res.send('Holis');
})

app.listen(4000, () => {
    console.log('el servidor esta gushi');
})