//primero escuchamos el click del boton enviar
document.getElementById("botonEnviar").addEventListener("click", function () {
    //aqui conseguimos las variables constantes dle nombre y la fecha
    const nombre = document.getElementById("nombreInput").value;
    const fecha = document.getElementById("fechaInput").value;
    //primera validacion, ver si el nombre es vacio
    if (nombre.trim() === "" || fecha === ""){
        accesoDenegado();
        return;
    }

    //con metodos de Date, calculamos la edad
    const hoy = new Date();                    
    const nacimiento = new Date(fecha);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    //ahora validamos la edad minima
    if (edad < 10){
        accesoDenegado();
        return;
    }

    //mostramos los nombres en pantalla en el panel
    document.getElementById("presentNombre").textContent = nombre;
    document.getElementById("presentEdad").textContent = edad;
    //si todo salio bien, será el panel el que se muestre y los demás se ocultarán
    document.getElementById("divEntrada").style.display  = "none";
    document.getElementById("divDenegado").style.display = "none";
    document.getElementById("divPanel").style.display    = "flex";
});

//ahora mostramos el acceso denegado con esa funcion
function accesoDenegado() {
    document.getElementById("divEntrada").style.display  = "none";
    document.getElementById("divPanel").style.display    = "none";
    document.getElementById("divDenegado").style.display = "flex";
  }

  // botón de volver a intenter del div denegado
  function volver() {
    document.getElementById("divDenegado").style.display = "none";
    document.getElementById("divEntrada").style.display  = "flex";
  }

  // botón continuar del panel (aquí irá el juego más adelante)
  function empezarJuego() {
    //luego lo continuo por ahora sólo esto
  }