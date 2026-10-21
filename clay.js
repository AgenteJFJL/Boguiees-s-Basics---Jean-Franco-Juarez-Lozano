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
  mostrarPantalla()
}

function mostrarPantalla(id) {
  const ids = [
    "divEntrada", "divDenegado", "divPanel", "divSelectJuego", "divJuego", "divGameOver"
  ]
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
    error: "No te preocupes, nuestro país tiene el mejor sistema educativo preescolar!"
  },
  {
    pregunta: "¿Cuál de estos es un número que no existe?",
    opciones: ["e", "0", "√2/7*-π", "√-1"],
    correcta: "√-1",
    pista: "Es la unidad imaginaria ¿Cual puede ser?",
    exito: "Bueno... excelente, recuerdas bien la primaria",
    error: "Yay"
  },
  {
    pregunta: "Cuál es el resultado de dividir un float entre cero?",
    opciones: ["Infinito", "NaN", "NUll", "ZeroDivisionError"],
    correcta: "Infinito",
    pista: "Los int muestran error, pero los float tienen un comportamiento distinto",
    exito: "¡Okay! Una pregunta de programacion disfrazada de mates... me siento estafado.",
    error: "Ya, yo también me confundí a la primera..."
  },
  {
    pregunta: "¿Cual es el valor de pi mas correcto?",
    opciones: ["3,1416", "3,1417", "3,1614", "3,1615"],
    correcta: "3,1416",
    pista: "El valor está redondeado al milésimo y es par",
    exito: "Jah, en primeria solo era 3,24 ... cada vez tenemos que usar más numeros...",
    error: "¡Hombre! ¿Cómo no vas a saber? ¿AHora cómo calcularás el área de un círculo en tu vida diaria?"
  },
  {
    pregunta: "¿Cuál de estos es una operación factorial?",
    opciones: ["¡4!", "7!", "6¡!", "9¡"],
    correcta: "7!",
    pista: "Es como escribes exclamaciones en inglés",
    exito: "¡¡¡¡SIETE!!!!!",
    error: "No, no estamos gritando esos números..."
  },
  {
    pregunta: "¿Cuál es la fórmula para hallar la altura recorrida de una caída libre? (v1= velocidad inicial, v2= velocidad final, t= tiempo)",
    opciones: ["(v1+v2/2)*t", "(v2/2)*v1+t", "(v1*t/2)-v2", "(v1+v2+t/v2)+t"],
    correcta: "(v1+v2/2)*t",
    pista: "El tiempo no es famoso por sumarse en las formulas de física",
    exito: "¡Vaya! ¡Realmente me has sorprendido! Creí que empezarías a maldecirnos.",
    error: "Si si, ¿yo cómo voy a saber eso?..."
  },
  {
    pregunta: "¿Cuánto es el seno de Pi medios multiplicado por la cotangente de 45 grados?",
    opciones: ["1", "2", "4", "3/2"],
    correcta: "1",
    pista: "No te rayes, sólo imagina la pregunta como si fuera una operación y ya",
    exito: "¡Eh! Así que tienes conocimientos básicos de trigonometría",
    error: "Lamenteibol."
  },
  {
    pregunta: "",
    opciones:["","","",""],
    correcta: "",
    pista: "",
    exito: "",
    error: ""
   },
   {
    pregunta: "¿A qué es igual el desarrollo del binomio al cuadrado (a + b)²?",
    opciones: ["a² + b²", "a² + ab + b²", "a² + 2ab + b²", "2a + 2b"],
    correcta: "a² + 2ab + b²",
    pista: "Simplemente multiplicalos manualmente y mira qué te sale",
    exito: "UN binomio básico me hace recordar mis épocas donde no podía usar el móvil en el aula.",
    error: "Adivinaré, elevaste al cuadrado a y b simplemente eh? hehe"
  },
  {
    pregunta: "Si los catetos de un triángulo rectángulo miden 3 y 4, ¿cuánto mide la hipotenusa?",
    opciones: ["5", "7", "12", "25"],
    correcta: "5",
    pista: "Para ello usamos el teorema de Peter, o no recuero cómo se llamaba",
    exito: "Recuerdo que tenía que memorizar los tríangulos rectángulos y sus lados... fue horrible.",
    error: "345345345345345345345 sólo hay que recordar eso."
  },
    {
    pregunta: "¿Qué ocurre con la fuerza de atracción gravitatoria entre dos objetos si la distancia entre ellos se duplica?",
    opciones: [
      "Se reduce a la mitad",
      "Se duplica",
      "Se reduce a la cuarta parte",
      "Se cuadriplica"
    ],
    correcta: "Se reduce a la cuarta parte",
    pista: "La fórmula es F = G * (m₁ * m₂) / d². Fíjate que la distancia 'd' está al cuadrado y en el denominador.",
    exito: "¡Excelente! Al estar la distancia al cuadrado en el denominador, duplicarla (2²) hace que la fuerza sea 4 veces menor.",
    error: "Explico... recuerda la ley del inverso del cuadrado: si la distancia aumenta al doble (2), la fuerza disminuye según su cuadrado (2² = 4)."
  },
    {
    pregunta: "¿Cuál es la suma de los primeros 10 términos de una sucesión aritmética si el primer término es 2 y el último es 20?",
    opciones: ["110", "220", "100", "90"],
    correcta: "110",
    pista: "Usa la fórmula de Gauss: S = n * (a₁ + a_n) / 2, donde 'n' es el número de términos.",
    exito: "¡Correcto! S = 10 * (2 + 20) / 2 = 10 * 22 / 2 = 110.",
    error: "Incorrecto. Suma el primero y el último término (2 + 20 = 22), multiplícalo por el número de términos (10) y divide el resultado entre 2."
  }

]