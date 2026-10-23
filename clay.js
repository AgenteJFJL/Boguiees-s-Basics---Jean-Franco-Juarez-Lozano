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
function selectModo() {
  mostrarPantalla("divSelectJuego");
}
//boton de volver al panel
function volverPanel() {
  mostrarPantalla("divPanel");
}
//boton del div del juego
function empezarMates() {
  mostrarPantalla();
}

function mostrarPantalla(id) {
  const ids = [
    "divEntrada",
    "divDenegado",
    "divPanel",
    "divSelectJuego",
    "divJuego",
    "divGameOver",
    "divGeoJuego",
  ];
  //ocultamos todos
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).style.display = "none";
  }
  //mostrar
  const el = document.getElementById(id);
  el.style.display = "flex";
}

//BANCO DE PREGUNTAS, esta serán las de matematica aqui estará guardado
const bancoMatematicas = [
  /* serán varias preguntas con diferentes atributos, se eligen
   de manera aleatoria en la pantalla
   plantilla:
   {
    pregunta: "",
    opciones:["","","",""],
    correcta: "",
    pista: "",
    exito: "",
    error: ""
   },
   */
  {
    pregunta: "¿Cuánto es 7+5?",
    opciones: ["15", "12", "1200", "1.2"],
    correcta: "12",
    pista: "Termina el kinder",
    exito: "¡WOW! ¡EXISTES!",
    error:
      "No te preocupes, nuestro país tiene el mejor sistema educativo preescolar!",
  },
  {
    pregunta: "¿Cuál de estos es un número que no existe?",
    opciones: ["e", "0", "√2/7*-π", "√-1"],
    correcta: "√-1",
    pista: "Es la unidad imaginaria ¿Cual puede ser?",
    exito: "Bueno... excelente, recuerdas bien la primaria",
    error: "Nada, sólo me imaginé la respuesta",
  },
  {
    pregunta: "Cuál es el resultado de dividir un float entre cero?",
    opciones: ["Infinito", "NaN", "NUll", "ZeroDivisionError"],
    correcta: "Infinito",
    pista:
      "Los int muestran error, pero los float tienen un comportamiento distinto",
    exito:
      "¡Okay! Una pregunta de programacion disfrazada de mates... me siento estafado.",
    error: "Ya, yo también me confundí a la primera...",
  },
  {
    pregunta: "¿Cual es el valor de pi mas correcto?",
    opciones: ["3,1416", "3,1417", "3,1614", "3,1615"],
    correcta: "3,1416",
    pista: "El valor está redondeado al milésimo y es par",
    exito:
      "Jah, en primeria solo era 3,24 ... cada vez tenemos que usar más numeros...",
    error:
      "¡Hombre! ¿Cómo no vas a saber? ¿AHora cómo calcularás el área de un círculo en tu vida diaria?",
  },
  {
    pregunta: "¿Cuál de estos es una operación factorial?",
    opciones: ["¡4!", "7!", "6¡!", "9¡"],
    correcta: "7!",
    pista: "Es como escribes exclamaciones en inglés",
    exito: "¡¡¡¡SIETE!!!!!",
    error: "No, no estamos gritando esos números...",
  },
  {
    pregunta:
      "¿Cuál es la fórmula para hallar la altura recorrida de una caída libre? (v1= velocidad inicial, v2= velocidad final, t= tiempo)",
    opciones: ["(v1+v2/2)*t", "(v2/2)*v1+t", "(v1*t/2)-v2", "(v1+v2+t/v2)+t"],
    correcta: "(v1+v2/2)*t",
    pista: "El tiempo no es famoso por sumarse en las formulas de física",
    exito:
      "¡Vaya! ¡Realmente me has sorprendido! Creí que empezarías a maldecirnos.",
    error: "Si si, ¿yo cómo voy a saber eso?...",
  },
  {
    pregunta:
      "¿Cuánto es el seno de Pi medios multiplicado por la cotangente de 45 grados?",
    opciones: ["1", "2", "4", "3/2"],
    correcta: "1",
    pista:
      "No te rayes, sólo imagina la pregunta como si fuera una operación y ya",
    exito: "¡Eh! Así que tienes conocimientos básicos de trigonometría",
    error: "Lamenteibol.",
  },
  {
    pregunta: "¿Cual es el ángulo que equivale a pi?",
    opciones: ["180", "90", "360", "270"],
    correcta: "180",
    pista: "La planaaaaa",
    exito:
      "No recuerdo si eso era de geometria o trigo, pero pos pi radianes equivalen a 180 grados",
    error: "OOF",
  },
  {
    pregunta: "¿A qué es igual el desarrollo del binomio al cuadrado (a + b)²?",
    opciones: ["a² + b²", "a² + ab + b²", "a² + 2ab + b²", "2a + 2b"],
    correcta: "a² + 2ab + b²",
    pista: "Simplemente multiplicalos manualmente y mira qué te sale",
    exito:
      "UN binomio básico me hace recordar mis épocas donde no podía usar el móvil en el aula.",
    error: "Adivinaré, elevaste al cuadrado a y b simplemente eh? hehe",
  },
  {
    pregunta:
      "Si los catetos de un triángulo rectángulo miden 3 y 4, ¿cuánto mide la hipotenusa?",
    opciones: ["5", "7", "12", "25"],
    correcta: "5",
    pista: "Para ello usamos el teorema de Peter, o no recuero cómo se llamaba",
    exito:
      "Recuerdo que tenía que memorizar los tríangulos rectángulos y sus lados... fue horrible.",
    error: "345345345345345345345 sólo hay que recordar eso.",
  },
  {
    pregunta:
      "¿Qué ocurre con la fuerza de atracción gravitatoria entre dos objetos si la distancia entre ellos se duplica?",
    opciones: [
      "Se reduce a la mitad",
      "Se duplica",
      "Se reduce a la cuarta parte",
      "Se cuadriplica",
    ],
    correcta: "Se reduce a la cuarta parte",
    pista:
      "La fórmula es F = G * (m₁ * m₂) / d². Fíjate que la distancia 'd' está al cuadrado y en el denominador.",
    exito:
      "¡Excelente! Al estar la distancia al cuadrado en el denominador, duplicarla (2²) hace que la fuerza sea 4 veces menor.",
    error:
      "Explico... recuerda la ley del inverso del cuadrado: si la distancia aumenta al doble (2), la fuerza disminuye según su cuadrado (2² = 4).",
  },
  {
    pregunta:
      "¿Cuál es la suma de los primeros 10 términos de una sucesión aritmética si el primer término es 2 y el último es 20?",
    opciones: ["110", "220", "100", "90"],
    correcta: "110",
    pista:
      "Usa la fórmula de Gauss: S = n * (a₁ + a_n) / 2, donde 'n' es el número de términos.",
    exito: "¡Correcto! S = 10 * (2 + 20) / 2 = 10 * 22 / 2 = 110.",
    error:
      "Incorrecto. Suma el primero y el último término (2 + 20 = 22), multiplícalo por el número de términos (10) y divide el resultado entre 2.",
  },
  //mas preguntas pueden ser añadidas al futuro
];
//ahora preparamos la partida de mates
let preguntasPartida = []; //las preguntas elegidas para esa partida
let indiceActual = 0;
const totalPreguntas = 7;

/*ahora tenemos que mezclar el array de las preguntas, asi que usamos el
algoritmo de FIsher yates, que maraja de forma aleatoria y segura,
para ello 
*/
function mezclar(array) {
  const copia = array.slice(); //una copia de las preguntas para no tocar el original
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copia[i]; //intercambiamos
    copia[i] = copia[j];
    copia[j] = temp;
  }
  return copia;
}
//ahora aqui empezamos con la logica del juego
function empezarMates() {
  preguntasPartida = mezclar(bancoMatematicas).slice(0, totalPreguntas);
  indiceActual = 0;
  mostrarPantalla("divJuego");
  mostrarPregunta();
}
//aqui la funcion de mostrar pregunta
function mostrarPregunta() {
  const p = preguntasPartida[indiceActual];

  document.getElementById("txtPregunta").textContent = p.pregunta;
  document.getElementById("txtProgreso").textContent =
    "Pregunta " + (indiceActual + 1) + " de " + totalPreguntas;
  const divPista = document.getElementById("divPista");
  document.getElementById("txtPista").textContent = "";
  divPista.style.display = "none";

  //ahora creamos los botones de las 4 opciones
  const contenedor = document.getElementById("divOpciones");
  contenedor.innerHTML = "";

  for (let i = 0; i < p.opciones.length; i++) {
    const opcion = p.opciones[i];
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.style.padding = "12px 24 px";
    boton.style.fontSize = "18 px";

    boton.onclick = function () {
      responder(opcion);
    }; //expresion funcion
    contenedor.appendChild(boton); //appendchild hace que se agregue al contenedor
  }
}

function mostrarPista() {
  const p = preguntasPartida[indiceActual];
  const divPista = document.getElementById("divPista");

  document.getElementById("txtPista").textContent = p.pista;
  divPista.style.display = divPista.style.display === "none" ? "flex" : "none";
}
//funcion de cuando el jugador responde
function responder(opcionElegida) {
  const p = preguntasPartida[indiceActual];
  const contenedor = document.getElementById("divOpciones");

  if (opcionElegida === p.correcta) {
    contenedor.innerHTML = "";

    const mensaje = document.createElement("p");
    mensaje.textContent = p.exito;
    mensaje.style.fontSize = "20px";
    mensaje.style.fontWeight = "bold";
    contenedor.appendChild(mensaje);

    const btn = document.createElement("button");
    btn.textContent = "Siguiente pregunta";
    btn.style.padding = "10px 22 px";
    btn.style.fontSize = "18 px";
    btn.style.cursor = "pointer";
    btn.onclick=function(){
      indiceActual++;
      if(indiceActual>=totalPreguntas){
        mostrarVictoria();
      }
      else{
        mostrarPregunta();
      }
    };
    contenedor.appendChild(btn);
  }
  else{
    mostrarDerrota(p.error);
  }
}
//un array con las frases de derrota
const frasesDerrota = [
  "No pasa nada, yo aprendí matemáticas jugando roblox",
  "A la próxima has un detinmarín lol",
  "Tal ves debas usar uno de estos : ...",
  "I GET ANGRIER FOR EVERY PROBLEM YOU GET WRONG",
  "La segunda es la vencida, la tercera es la vencida... la cuarta es la...",
  "No me rendiré, no importa que mi orgullo sea destruido por completo, ¡Mis deseos de ponerme a prueba me levantarán porque son muy grandes! ",
  "Oh no hermano."
];
function mostrarDerrota(mensajeError){
  const aleatorio = frasesDerrota[Math.floor(Math.random()*frasesDerrota.length)];
  
  const titulo = document.getElementById("tituloFinal");
  titulo.textContent = "Fin del juego";
  titulo.style.fontWeight = "bold";

  document.getElementById("txtfraseGameOver").textContent = mensajeError;
  document.getElementById("txtFraseBoguiee").textContent = aleatorio;

  mostrarPantalla("divGameOver");
}
function mostrarVictoria(){
  const titulo=document.getElementById("tituloFinal");
  titulo.textContent="EXITOTO";
  titulo.style.fontWeight="bold";

  document.getElementById("txtfraseGameOver").textContent="¡Felicidades! Has completado el juego con éxito.";
  document.getElementById("txtFraseBoguiee").textContent="Hehe, ¿Quien diría que aún tienes recuerdos que valen la pena del bachillerato?";

  mostrarPantalla("divGameOver");
}
//volver al panel
function confirmarVolver(){
  const seguro = confirm("Si vuelves perderás el progreso Oh noo. ");
  if(seguro){
    mostrarPantalla("divPanel");
  }
}
//MAS PROXIMAMENTE

