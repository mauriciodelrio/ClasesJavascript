document.addEventListener("DOMContentLoaded", function(event) {
  // Vamos a crear un modal dinámicamente con Bootstrap
  let modal = document.createElement("div");
  // creamos un div vacío y le vamos añadiendo propiedades como clases, id, etc.
  modal.classList.add("modal", "fade");
  modal.id="exampleModal";
  // en la documentación de bootstrap, en la sección de modales, notamos que al generarse un modal, se deben añadir estas propiedades para que funcione correctamente
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalCenterTitle");
  modal.setAttribute("aria-hidden", "true");
  // Utilizamos Inner HTML para crear nuestro modal
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" id= "save"  data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  `;
  // Añadimos el modal a la página
  document.body.appendChild(modal);

  // Añadimos un evento al botón de Click modal para abrirlo
  document.getElementById("clickModal").addEventListener("click", function() {
    // le añadimos la clase show para que se muestre
    document.querySelector(".modal").classList.add("show");
  });
  // Añadimos un evento al botón de Click modal para cerrarlo
  document.getElementById("save").addEventListener("click", function() {
    // le añadimos la clase show para que se oculte
    document.querySelector(".modal").classList.remove("show");
  });

});