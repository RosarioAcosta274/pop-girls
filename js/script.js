
let container = document.querySelector("#lista-artistas");

fetch("js/artistas.json")
  .then(response => response.json())
  .then(artistas => {
    artistas.forEach(artista => {
      container.innerHTML += `
        <div class="col-lg-4">
          <div class="card bg-black text-light border-secondary h-100">
            <img src="${artista.imagen}" class="card-img-top img-fluid" alt="${artista.nombre}">
            <div class="card-body p-4">
              <p class="text-uppercase text-danger fw-bold mb-2">${artista.numero} · ${artista.genero}</p>
              <h2 class="h4 card-title fw-bold mb-2">${artista.nombre}</h2>
              <p class="text-secondary mb-3">${artista.estilo}</p>
              <p class="card-text">${artista.descripcion}</p>
            </div>
          </div>
        </div>
      `;
    });
  });

const formulario = document.querySelector("#miFormulario");
const mensajeGracias = document.querySelector("#mensajeGracias");

formulario.addEventListener("submit", function (event) {

  event.preventDefault();

  if (!formulario.checkValidity()) {
    event.stopPropagation();
    formulario.classList.add("was-validated");
    return;
  }

  formulario.classList.add("was-validated");

  formulario.classList.add("d-none");
  mensajeGracias.classList.remove("d-none");

});
