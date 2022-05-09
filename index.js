const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//creamos servidor
const app = express();

//conectar a db
conectarDB();
app.use(cors())

//middleware
app.use(express.json());

app.use('/api/productos', require('./routes/producto'))

app.listen(4000, () => {
    console.log('el servidor esta working');
})