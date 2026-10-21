//primero escuchamos el click del boton enviar
document.getElementById("botonEnviar").addEventListener("click", function () {
  //aqui conseguimos las variables constantes dle nombre y la fecha
  const nombre = document.getElementById("nombreInput").value;
  const fecha = document.getElementById("fechaInput").value;
  //primera validacion, ver si el nombre es vacio
  if (nombre.trim() === "" || fecha === "") {
    accesoDenegado();
    return;
  }

  //con metodos de Date, calculamos la edad
  const hoy = new Date();
  const nacimiento = new Date(fecha);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  //ahora validamos la edad minima
  if (edad < 10) {
    accesoDenegado();
    return;
  }

  //mostramos los nombres en pantalla en el panel
  document.getElementById("presentNombre").textContent = nombre;
  document.getElementById("presentEdad").textContent = edad;
  //si todo salio bien, será el panel el que se muestre y los demás se ocultarán
  mostrarPantalla("divPanel");
});

//ahora mostramos el acceso denegado con esa funcion
function accesoDenegado() {
  mostrarPantalla("divDenegado");
}

// botón de volver a intenter del div denegado
function volver() {
  mostrarPantalla("divEntrada");
}

// botón continuar del panel
function empezarJuego() {
  mostrarPantalla("divModos");
}
//boton de volver al panel 
function volverPanel(){
  mostrarPantalla("divPanel");
}

function mostrarPantalla(id){
  const ids=[
    "divEntrada", "divDenegado", "divPanel", "divModos", "divJuego", "divGameOver"
  ]
  //ocultamos todos
  for(let i =0; i< ids.length; i++){
    document.getElementById(ids[i]).style.display="none";
  }
  //mostrar
  const el = decodeURIComponent.getElementById(id);
  el.style.display= flex;
}