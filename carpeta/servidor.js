const express = require("express");
const app = express();
const fs = require("fs/promises");

app.use(express.json());

app.get('/restaurante.json', async (req, res) => {
    const { zona } = req.query;
    const data= await fs.readFile("./restaurante.json", "utf-8"); 
    const restaurante= JSON.parse(data);
    const restauranteFiltrados = restaurante.filter((restaurante)=>restaurante.zona===zona)
    res.json(restauranteFiltrados)

  });
  





app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

