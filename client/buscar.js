const buscador = document.getElementById('buscar');
const resultado = document.getElementById('resultados');
const input = document.getElementById('buscar-input');
let restaurantes; 





function buscarRestaurantes(zona) {
  fetch("/restaurante?zona=" + zona)
    .then((resp) => resp.json())
    .then((data) => {
      restaurantes = data;
      mostrarResultados(data)
    })
    .catch((error) => {
      console.error('Error al cargar los datos:', error);
    });
}



buscador.addEventListener("submit", (event) => {
  event.preventDefault();
  let zona = input.value;
  buscarRestaurantes(zona);
});



function mostrarResultados(restaurantes) {
  resultado.innerHTML = '';
  restaurantes.forEach((restaurante) => {
    let article = document.createElement('article');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let descripcion = document.createElement('p');

    h1.innerText = restaurante.nombre;
    img.setAttribute("src", "imagenes/" + restaurante.imagen);
    img.setAttribute("width", "50%");
    img.setAttribute("height", "30%");

    descripcion.textContent = restaurante.direccion;

    article.appendChild(h1);
    article.appendChild(img);
    article.appendChild(descripcion);
    resultado.appendChild(article);
  });
}





