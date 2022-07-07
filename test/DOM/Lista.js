document.addEventListener("DOMContentLoaded", function(event) {
  /* PARTE 1 Creamos la lista, verificamos localstorage para ver si hay elementos guardados, si no los hay, generamos la lista desde 0 */  
  // verificamos si existe el elemento lista en local storage
  let lista = window.localStorage.getItem("lista")
  // creamos inicialmente la lista al cargar la página de forma dinámica
  let ul = document.createElement("ul")
  ul.classList.add("list-group", "list-group-flush")
  ul.id = "lista-items"

  // verificamos todas las posibles combinaciones de listas vacías, por si tenemos algún error de código
  if(lista!== null && lista!== undefined && lista!== []) {
    // si hay lista, la transformamos en JSON
    lista = JSON.parse(lista)
    // por cada elemento de la lista, creamos un li y lo añadimos al ul
    lista.forEach(function(item, index) {
      let li = document.createElement("div")
      li.id = index;
      li.innerHTML = `
        <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          ${item.value}
          <button id="delete-item" name=${item.id} class="btn btn-danger btn-sm float-right" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar">
            Eliminar <i class="fa fa-trash"></i>
          </button>
        </li>
      `
      ul.appendChild(li)
    })
  }
  // agregamos la lista al div
  document.getElementById("lista").appendChild(ul)


  /* PARTE 2 creamos el evento para ir añadiendo elementos a nuestra lista */
  document.getElementById("add-item").addEventListener("click", function(event) {
    event.preventDefault()
    let item = {
      id: null,
      value : document.getElementById("input-add").value
    }
    let lista = window.localStorage.getItem("lista")
    let lengthLista = 1
    if(lista) {
      lista = JSON.parse(lista)
      lista.push(item)
      item.id = lista.length - 1
      lengthLista = lista.length
    }
    else {
      item.id = 0
      lista = [item]
      lengthLista = lista.length
    }
    document.getElementById("input-add").value = ""

    window.localStorage.setItem("lista", JSON.stringify(lista))
    let li = document.createElement("div")
    li.id = lengthLista - 1;
    li.innerHTML = `
      <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        ${item.value}
        <button id="delete-item" name=${item.id} class="btn btn-danger btn-sm float-right" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar">
          Eliminar <i class="fa fa-trash"></i>
        </button>
      </li>
    `
    ul.appendChild(li)

    document.getElementsByName(lengthLista - 1)[0].addEventListener("click", function(event) {
      event.preventDefault()
      let name =event.target.name
      console.log("name", name)
      let lista = window.localStorage.getItem("lista")
      if(lista) {
        lista = JSON.parse(lista)
        lista = lista.filter(function(item, index) {
          return item.id != Number(name)
        })
        console.log(lista)
      }
      window.localStorage.setItem("lista", JSON.stringify(lista))
      document.getElementById(name).remove()
    })
    

  })
  document.getElementById("remove-items").addEventListener("click", function(event) {
    event.preventDefault()
    window.localStorage.removeItem("lista")
    document.getElementById("lista-items").innerHTML = ""
  })
});