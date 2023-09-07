const fs = require("fs/promises");


const getAll = async (req, res) => {
    const { zona } = req.query;
    const data= await fs.readFile("./restaurante.json", "utf-8"); 
    const restaurante= JSON.parse(data);
    const restauranteFiltrados = zona ? restaurante.filter((restaurante)=>restaurante.zona===zona) : restaurante;
    res.json(restauranteFiltrados)
}

module.exports = {
    getAll
}