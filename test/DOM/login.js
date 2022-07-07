document.addEventListener("DOMContentLoaded", function(event) {
  // Si la persona inició sesión previamente y están sus campos guardados por local storage, entonces prellenamos los imputs
  if(window.localStorage.getItem("login")){
    let data = JSON.parse(window.localStorage.getItem("login"));
    document.getElementById("email").value = data.email;
    document.getElementById("password").value = data.password;
  }
  // creamos el event listener para presionar el botón login
  document.getElementById("login").addEventListener("click", function(event) {
    // siempre al hacer click en un evento on click debemos poner un prevent default para que no se ejecute el evento por defecto
    event.preventDefault();
    // creamos un objeto con los datos de los inputs
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let data = {
      email: email,
      password: password
    }
    // guardamos los datos en local storage si se escribieron en los inputs
    if(data.email && data.password) {
      // guardamos los valores en local storage
      window.localStorage.setItem('login', JSON.stringify(data))
      // ahora como ya iniciamos sesión reemplazaremos el formulario por un mensaje de bienvenida
      // obtenemos el div padre
      let content = document.getElementById("div-content")
      // ocultamos el formulario
      document.getElementById("form-login").style.display = "none"
      // creamos un div de reemplazo
      let divLogged = document.createElement("div")
      divLogged.classList.add("logged-in")
      content.appendChild(divLogged)
      // creamos el contenido que reemplazará los valores dinámicamente
      divLogged.appendChild(document.createElement("h3")).id = "logged-in-title"
      divLogged.appendChild(document.createElement("p")).id = "logged-in-text"
      document.getElementById("logged-in-title").innerHTML = `Bienvenido ${data.email}`
      document.getElementById("logged-in-text").innerHTML = ` Este texto solamente lo puedes ver porque has iniciado sesión.`
      // añadimos un botón para cerrar sesión
      divLogged.appendChild(document.createElement("button")).id = "logout"
      document.getElementById("logout").appendChild(document.createTextNode("Logout"))
      document.getElementById("logout").classList.add("btn", "btn-danger")

      // creamos un event listener para el botón logout
      document.getElementById("logout").addEventListener("click", function() {
        // eliminamos los datos de local storage al cerrar sesión
        window.localStorage.removeItem('login')
        // limpiamos los imputs de email y password
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        // volvemos a colocar el formulario
        document.getElementById("form-login").style.display = "block"
        // eliminamos el div de reemplazo del formulario
        document.getElementsByClassName("logged-in")[0].style.display = "none"
      })
    } else {
      alert("Debes ingresar un email y contraseña")
    }
  })
});