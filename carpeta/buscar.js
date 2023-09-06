const buscador = document.getElementById('buscar');
const resultado = document.getElementById('resultados');
const input = document.getElementById('buscar-input');
let restaurantes; 

fetch("restaurante.json")
  .then((resp) => resp.json())
  .then((data) => {
    restaurantes = data;
  })
  .catch((error) => {
    console.error('Error al cargar los datos:', error);
  });


function buscarRestaurantes(zona) {
  let restaurantesFiltrados = restaurantes.filter((restaurante) => {
    let zonaTransformado = restaurante.zona.toLowerCase();
    return zonaTransformado.includes(zona.toLowerCase());
  });
  return restaurantesFiltrados;
}

buscador.addEventListener("submit", (event) => {
  event.preventDefault();
  let zona = input.value;
  const restaurantesFiltrados = buscarRestaurantes(zona);
  console.log(restaurantesFiltrados);
  mostrarResultados(restaurantesFiltrados);
});

function mostrarResultados(restaurantes) {
  resultado.innerHTML = '';
  restaurantes.forEach((restaurante) => {
    let article = document.createElement('article');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let descripcion = document.createElement('p');

    h1.innerText = restaurante.nombre;
    img.setAttribute("src", restaurante.imagen);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "30%");

    descripcion.textContent = restaurante.direccion;

    article.appendChild(h1);
    article.appendChild(img);
    article.appendChild(descripcion);
    resultado.appendChild(article);
  });
}



