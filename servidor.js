const express = require("express");
const app = express();
const path = require('path');

const navController = require('./server/controller/navController')
const restauranteController = require('./server/controller/restauranteController')

app.use(express.static(path.join(__dirname, './client')));
app.use(express.json());

app.get('/', navController.home);


app.get('/restaurante', restauranteController.getAll);




app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

