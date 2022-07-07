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
    // creamos el objeto inicialmente que tendrá los valores ingresados por el input más el id el cual inicialmente no lo sabemos
    let item = {
      id: null,
      value : document.getElementById("input-add").value
    }
    // verificamos si ya había una lista en nuestro local storage
    let lista = window.localStorage.getItem("lista")
    // asignamos un largo de lista inicial el cuál es 1, ya que sí o sí agregaremos un elemento a la lista aunque esté vacía
    let lengthLista = 1
    // si la lista no está vacía, la transformamos en JSON
    if(lista) {
      lista = JSON.parse(lista)
      // aladimos el elemento ingresado por input a la lista
      lista.push(item)
      // le damos su id, el cual siempre será el largo de la lista menos uno, ya que la función push lo añade al final
      item.id = lista.length - 1
      lengthLista = lista.length
    }
    else {
      // si es el primer elemento entonces sabemos que su id parte desde 0, creamos la lista con un elemento
      item.id = 0
      lista = [item]
      lengthLista = lista.length
    }
    // limpiamos el valor del input
    document.getElementById("input-add").value = ""
    // guardamos nuestra lista actualizada en local storage
    window.localStorage.setItem("lista", JSON.stringify(lista))
    // ahora añadiremos visualmente el elemento a la lista usando un div que contendrá el li
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
    // añadimos el li al ul
    ul.appendChild(li)

    /* PARTE 3: remover un elemento de la lista 
    Esta parte puede ser un poco más complicada puesto que debemos remover el elemento en específico, para ello vamos a validar 
    contra el name del elemento
    El elemento click del botón eliminar debe quedar asociado a cada elemento de la lista
    */
    document.getElementsByName(lengthLista - 1)[0].addEventListener("click", function(event) {
      event.preventDefault()
      // guardamos el nombre del elemento que se va a eliminar
      let name =event.target.name
      // obtenemos nuestra lista desde local storage
      let lista = window.localStorage.getItem("lista")
      // si existe lista eliminaremos el elemento seleccionado
      if(lista) {
        lista = JSON.parse(lista)
        lista = lista.filter(function(item, index) {
          return item.id != Number(name)
        })
        // filter no entregará todos los elementos de la lista, excepto el que queremos eliminar
      }
      // volvemos a guardar nuestra lista actualizada en local storage
      window.localStorage.setItem("lista", JSON.stringify(lista))
      // eliminamos de nuestro HTML el elemento de la lista seleccionado
      document.getElementById(name).remove()
    })
    
  })
  /* PARTE 4: Eliminar todos los elementos de una lista */
  document.getElementById("remove-items").addEventListener("click", function(event) {
    event.preventDefault()
    // eliminamos todos los elementos de la lista en local storage
    window.localStorage.removeItem("lista")
    // reemplazamos lista-items por un HTML vacío
    document.getElementById("lista-items").innerHTML = ""
  })
});