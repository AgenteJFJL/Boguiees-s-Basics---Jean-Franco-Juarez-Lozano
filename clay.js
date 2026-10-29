// edicion par ahacer que el nombre sea variable global
let nombreJugador=""
//primero escuchamos el click del boton enviar
document.getElementById("botonEnviar").addEventListener("click", function () {
  //aqui conseguimos las variables constantes dle nombre y la fecha
  const nombreAn = document.getElementById("nombreInput").value;
  const fecha = document.getElementById("fechaInput").value;
  //primera validacion, ver si el nombre es vacio
  if (nombre.trim() === "" || fecha === "") {
    accesoDenegado();
    return;
  }

  //con metodos de Date, calculamos la edad
  const hoy = new Date();
  const nacimiento = new Date(fecha + "T00:00:00");
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const cumpleanosEsteAnio = new Date(
    hoy.getFullYear(),
    nacimiento.getMonth(),
    nacimiento.getDate()
  );

  if (hoy < cumpleanosEsteAnio) {
    edad--;
  }

  //ahora validamos la edad minima
  if (edad < 10) {
    accesoDenegado();
    return;
  }
  //formatear el nombre con métodos string
  nombreJugador = nombreAn.trim();

  //mostramos los nombres en pantalla en el panel
  document.getElementById("presentNombre").textContent = nombreJugador;
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
  mostrarPantalla("divJuego");
  mostrarPregunta();
}

function mostrarPantalla(id) {
  if (!id) return;

  const ids = [
    "divEntrada",
    "divDenegado",
    "divPanel",
    "divSelectJuego",
    "divJuego",
    "divGameOver",
    "divGeoJuego",
    "divSeleccionHistoria",
    "divCharla",
    "divFinalCharla"
  ];
  //ocultamos todos
  for (let i = 0; i < ids.length; i++) {
    const pantalla = document.getElementById(ids[i]);
    if (pantalla) {
      pantalla.style.display = "none";
    }
  }
  //mostrar
  const el = document.getElementById(id);
  if (el) {
    el.style.display = "flex";
  }
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
    boton.style.padding = "12px 24px";
    boton.style.fontSize = "18px";

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
    btn.style.padding = "10px 22px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.onclick = function () {
      indiceActual++;
      if (indiceActual >= totalPreguntas) {
        mostrarVictoria();
      }
      else {
        mostrarPregunta();
      }
    };
    contenedor.appendChild(btn);
  }
  else {
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
function mostrarDerrota(mensajeError) {
  const aleatorio = frasesDerrota[Math.floor(Math.random() * frasesDerrota.length)];

  const titulo = document.getElementById("tituloFinal");
  titulo.textContent = "Fin del juego";
  titulo.style.fontWeight = "bold";

  document.getElementById("txtfraseGameOver").textContent = mensajeError;
  document.getElementById("txtFraseBoguiee").textContent = aleatorio;

  mostrarPantalla("divGameOver");
}
function mostrarVictoria() {
  const titulo = document.getElementById("tituloFinal");
  titulo.textContent = "EXITOTO";
  titulo.style.fontWeight = "bold";

  document.getElementById("txtfraseGameOver").textContent = "¡Felicidades! Has completado el juego con éxito.";
  document.getElementById("txtFraseBoguiee").textContent = "Hehe, ¿Quien diría que aún tienes recuerdos que valen la pena del bachillerato?";

  mostrarPantalla("divGameOver");
}
//volver al panel
function confirmarVolver() {
  const seguro = confirm("Si vuelves perderás el progreso Oh noo. ");
  if (seguro) {
    mostrarPantalla("divPanel");
  }
}

//BANCO DE PREGUNTAS DE GEOGRAFIA
const bancoGeografia = [
  /* Plantilla:
  {
    pregunta: "",
    opciones:["","","",""],
    correcta: "",
    pista: "",
    exito: "",
    error: "",
    imagen: ""
   },
  */
  {
    pregunta: "¿Cómo se llama el país más grande de América del Sur?",
    opciones: ["México", "Brasil", "Bolivia", "México del Sur"],
    correcta: "Brasil",
    pista: "EL unico de ellos que no habla español",
    exito: "¡Brasiul o macaco!",
    error: "Mexico no es de América del Sur, tonto.",
    imagen: ""
  },
  {
    pregunta: "¿Cómo se llama aquel planeta que en 2006 dejó de serlo en nuestro vecindario planetario?",
    opciones:["Caronte","Putín","Plutón","Calisto"],
    correcta: "Plutón",
    pista: "Wow, una pregunta de geografía espacial,a ver si conoces el barrio solar en el que vives.",
    exito: "Tal vez debí reformular la pregunta para hacerla más dificil.",
    error: "¡¡ELEGISTE AL PRESIDENTE????! AAAAAA",
    imagen: ""
   },
   {
    pregunta: "¿Cuál es el país con la tasa de natalidad más baja del mundo?",
    opciones:["Groenlandia","España","Japón","SurCorea"],
    correcta: "SurCorea",
    pista: "Chinos macacos",
    exito: "Efectivamente, Los surcoreanos podrían extinguirse para el próximo siglo, oof , ya no más kpop ni kdramas.",
    error: "Lo siento, pero sorprendentemente el país más idealizado es el que menos hijos quiere.",
    imagen: ""
  },
   {
    pregunta: "¿Dentro de qué territorio se encuentra el Vaticano?",
    opciones:["Francia","Reino Unido","Italia","Alemania"],
    correcta: "Italia",
    pista: "¿El papamóvil es católico?",
    exito: "El Vaticano se encuentra en Roma, que escrito al revés es Amor, pero también se encuentra en Italia.",
    error: "Peínate.",
    imagen: ""
   },
   {
    pregunta: "¿En qué país se encuentra Nuevo México?",
    opciones:["México","EEUU","SurMéxico","Perú"],
    correcta: "EEUU",
    pista: "¿De qué color es el conejo blanco?",
    exito: "Nuevo México, estado de abogados, cotrabandistas, drogas, narcotráfico y una orgullosa narcocultura, se encuentra en Estados Unidos",
    error: "Nuevo México es un estado de Disparos Unidos, no de Mexico.",
    imagen: ""
   },
   {
    pregunta: "¿En qué país Nació CR7?",
    opciones:["Brasil","Cristianolandia","Portugal","Perú"],
    correcta: "Portugal",
    pista: "CR7 habla portugués, pero aquí hay más de un país que se habla ese idioma.",
    exito: "Pobre CR7 tuvo crecer viendo Dragon Ball en doblaje portugués.",
    error: "CR7 nació en Portugal, no en Perú, aunque ya quisiera.",
    imagen: ""
   },
   {
    pregunta: "¿Qué país se disolvió en 1991 y dio lugar a países como Crocia, Serbia, Bosnia o Esovenia?",
    opciones:["Yugoslavia","Kosovo","La Union Sovietica","Montenegro"],
    correcta: "Yugoslavia",
    pista: "Recuerda, uno de estos es un país que ya no está en el mapa, y hay otro que ni siquiera fue un país como tal.",
    exito: "Me dio un perro coraje cómo un pueblo tan fuerte pudo disolverse por la corrupción de ambas potencias dominantes, lo que me hizo darme cuenta que jamás sería como mi gran ídolo Josip Broz TITO. Nunca podría unificar al pueblo cristiano con el musulmán, me dió tanta rabia como hambre, así que decidí robarle de nuevo la comida de mi hermana Maguiee.",
    error: "Bueno, por algo estamos aquí y no estudiando letras.",
    imagen: ""
   },
   {
    pregunta: "El estrecho de Bering es el cuál según la teoría asiática de la población americana, fue un puente que se congeló durante la última glaciación de la tierra, donde los humanos primitivos cruzaron para llegar a América y poblarla, este estrecho une a Estados Unidos y a ...",
    opciones:["Japón","Portugal","SurCorea","Rusia"],
    correcta: "Rusia",
    pista: "Tuvieron que venir de algún lado de Asia, pero ¿Cuál?",
    exito: "¡Bien! ¡Recuerdas un poco de historia al parecer!",
    error: "Okay, tal vez te hice rebuscar mucho en los recuerdos de la infancia.",
    imagen: ""
   },
   {
    pregunta: "¿Cuál es la capital de España?",
    opciones:["Madrid","Provincia De Madrid","Comunidad Autónoma de Madrid","Madrid DC"],
    correcta: "Madrid",
    pista: "No te rayes",
    exito: "En Madrid cunples tus sueños, hay trabajo por doquier, puedes tener una gran vivienda, la gente es de lo mejor y conectas con el resto... del mundo...",
    error: "JAJA TE MAREÉ",
    imagen: ""
   },
   {
    pregunta: "¿Cuál de estos países NO forma parte de los supremos poderes del BRICS?",
    opciones:["Brasil","India","Corea","Rusia"],
    correcta: "Corea",
    pista: "Qué confuso, los Brics son siglas de la letra inicial de los nombres de estos países que dominan el mundo, ¿Cuál podrá ser?",
    exito: "OBVIAMENTE, COREA NO SE COMPARA EN PODER CON CHINA MUAJAJAJAJAJAJAJAJJAAJJAAJAJAJA!!!!",
    error: "Hay un impostor entre nosotros, uno que no quiere casarse.",
    imagen: ""
   },
   {
    pregunta: "Uno de estos países habla español como su lengua principal",
    opciones:["Guyana","Surinam","Guinea","Brasil"],
    correcta: "Guinea",
    pista: "Identifica al país africano y habrás ganado",
    exito: "Guinea es el unico país de África en el cual se habla español como lengua oficial.",
    error: "Ya basta, ponte preguntas de Europa y no de otros lados que no me importan en lo más mínimo ¿Cómo esperas a que conteste estas preguntas?",
    imagen: ""
   },
   {
    pregunta: "¿Qué ciudad atraviesa el muro de Berlín?",
    opciones:["Berlín","Londres","Bélice","AlemaniaCity"],
    correcta: "Berlín",
    pista: "Sale en un video de entrevistando españoles sobre geografía ¿Podrás acertar?",
    exito: "NO ME DIGAS!!!!!",
    error: "Estaba seguro que ALemaniaCity tiene algo que ver con Berlín",
    imagen: ""
   },
   {
    pregunta: "¿EN qué continente está Asia?",
    opciones:["Australia","America","Africa","Asia"],
    correcta: "Asia",
    pista: "Me has pillado chaval",
    exito: "Hubo una vez en que dibujé conn 5 años una bandera del Perú con una piedra con ojos, alas y boca, era un niño, y era la evaluación sobre dibujo por fiestras patrias, iba a sacar un 10, pero sólo por una piedra, saqué un 9, desde entonces, no soy orgullosamente yandere.",
    error: "Más suerte para la proxima chaval, traere preguntas menos dificiles.",
    imagen: ""
   },
   {
    pregunta: "¿En qué planeta vivía la especie de Namekuseiyin?",
    opciones:["Namek","Namekuseiyin","Namekusein","Tierra"],
    correcta: "Namek",
    pista: "Pobres los que vimos el anime, nos vamos a confundir, espero hayas leído el manga",
    exito: "Oops se me ha colado esta pregunta",
    error: "Oops se me ha colado esta pregunta",
    imagen: ""
   },
   {
    pregunta: "¿De qué país fue gobernante el señor Pol Pot?",
    opciones:["Caribe","Camerún","Camboya","Colombia"],
    correcta: "Camboya",
    pista: "Uno de esos países sufrió un genocidio masivo que no convenía que saliera en los periódicos porque a nadie le importaba, ¿Quién podrá ser?",
    exito: "ព្រះបានបោះបង់ចោលយើងហើយ",
    error: "Cada vez se olvidan más de ellos.",
    imagen: ""
   },
   {
    pregunta: "Entre estos países con salida al mar, ¿Cuál es el más potencialmente sísmico?",
    opciones:["Marruecos","Italia","Chile","Madagascar"],
    correcta: "Chile",
    pista: "Es bien sabido los países que se encuentran en el cinturón de fuego son los más potencialmente sísmicos, pero ¿Cuál de ellos se encuentra en él?",
    exito: "Una vez fui de visita a CHile y no miento cuando digo que TODOS LOS DIAS hay un temblor, una persona que no está acostumbrada a ellos de seguro se mea encima",
    error: "Ay por favor, solo hay que ver los memes de 2022",
    imagen: ""
   },
   {
    pregunta: "¿En que país se encuentra el Monte Everest?",
    opciones:["Nepal","Japón","Malasia","Singapur"],
    correcta: "Nepal",
    pista: "En realidad hay 2 países que tienen su territorio, pero aquí sólo puse uno de ellos, uno es China, y lógicamente el otro está al lado suyo",
    exito: "Nepal... la tranquila Nepal...",
    error: "¿ALguna vez has escuchado el EAS alarm de Malasia? No lo busques porfa",
    imagen: ""
   },
   {
    pregunta: "¿Cuál es la capital de China?",
    opciones:["Chengdu","Pekín","Hong Kong","Shangai"],
    correcta: "Pekín",
    pista: "Todos son ciudades de CHina, pero uno de ellos se caracteriza por compartir su nombre con una especie de pato.",
    exito: "Pekín es la capital de China, donde hay ingenieros viviendo en la calle y ya no aceptan dinero físico. China es el futuro",
    error: "Yo no hablo Taka Taka señor... ni siquiera lo voy a intentar.",
    imagen: ""
   },
   {
    pregunta: "¿QUién es el actual presidente de Venezuela?",
    opciones:["Donald Trump","Edmundo Gonzáles","Delcy Rodríguez","Nicolás Maduro"],
    correcta: "Delcy Rodríguez",
    pista: "Uno de ellos ganó las elecciones de forma legítima, pero eso no lo hace presidente, si no, el que tenga poder en el gobierno o no.",
    exito: "Oh, me sorprendes, aunque claro, con un poco de descarte podías adivinarlo, pero si de verdad lo sabías... tú no eres de aquí... ¿Verdad?",
    error: "No pasa nada si no lo sabes, no estás obligado a saber cosas de un país que no tiene qué y no te importa.",
    imagen: ""
   },
   {
    pregunta: "Todos saben en qué país se encuentra Macchu Picchu, pero ¿EN qué famosa región se encuentra?",
    opciones:["Áncash","Cajamarca","Callao","Cuzco"],
    correcta: "Cuzco",
    pista: "Si viste la peli del Emperador y sus locuras, entonces recordarás que la respuesta es mencionada muchas veces,de hecho es el nombre del protagonista",
    exito: "Heh, lo sabías por la peli ¿No? Tal vez deba dejar de poner pistas tan sencillas, o para nada útiles.",
    error: "C kronk",
    imagen: ""
   },
   {
    pregunta: "Aquí menciono países cuyo nombre completo son más de 1 palabra, uno de ellos sí que únicamente tiene una palabra ¿Cuál es?",
    opciones:["Salvador","Arabia","Singapur","Corea"],
    correcta: "Singapur",
    pista: "No es que haya muchos países con más de 1 palabra en su nombre como para que te olvides",
    exito: "Singapur es el siguiente país que quiero visitar, convirtieron una isla de pescadores en una potencia",
    error: "Ni mencionar a Cabo Verde, Estados Unidos, Reino Unido, El Caribe, Nueva Guinea, etc.",
    imagen: ""
   }
   
]

let preguntasPartidaGeo=[];
let indiceActualGeo=0;
const totalPreguntasGeo=7;

//partida de geogr
function empezarGeografia(){
  preguntasPartidaGeo = mezclar(bancoGeografia).slice(0, totalPreguntasGeo);
  indiceActualGeo=0;
  mostrarPantalla("divGeoJuego");
  mostrarPreguntaGeo();
}
//funcion de mostrar pregunta geo
function mostrarPreguntaGeo(){
  const p = preguntasPartidaGeo[indiceActualGeo];
  document.getElementById("txtPreguntaGeo").textContent = p.pregunta;
  document.getElementById("txtProgresoGeo").textContent = "Pregunta " + (indiceActualGeo + 1) + " de " + totalPreguntasGeo;

  const imgGeo = document.getElementById("imgGeo");
  if (imgGeo) {
    imgGeo.src = p.imagen || "";
  }

  const divPista = document.getElementById("divPistaGeo");
  divPista.style.display = "none";
  document.getElementById("txtPistaGeo").textContent = "";

  const contenedor = document.getElementById("divOpcionesGeo");
  contenedor.innerHTML = "";

  for (let i = 0; i < p.opciones.length; i++) {
    const opcion = p.opciones[i];
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.style.padding = "12px 24px";
    boton.style.fontSize = "18px";
    boton.style.cursor = "pointer";
    boton.onclick = function () { responderGeo(opcion); };
    contenedor.appendChild(boton);
  }
}
function mostrarPistaGeo(){
  const p = preguntasPartidaGeo[indiceActualGeo];
  const divPista = document.getElementById("divPistaGeo");
  const txtPista = document.getElementById("txtPistaGeo");

  txtPista.textContent = p.pista;
  divPista.style.display = divPista.style.display === "none" ? "block" : "none";
}
function responderGeo(opcionElegida){
  const p = preguntasPartidaGeo[indiceActualGeo];
  const contenedor = document.getElementById("divOpcionesGeo");

  if (opcionElegida === p.correcta){
    contenedor.innerHTML = "";

    const mensaje = document.createElement("p");
    mensaje.textContent = p.exito;
    mensaje.style.fontSize = "20px";
    mensaje.style.fontWeight = "bold";
    contenedor.appendChild(mensaje);

    const btn = document.createElement("button");
    btn.textContent = "Siguiente";
    btn.style.padding = "10px 22px";
    btn.style.fontSize = "18px";
    btn.style.cursor = "pointer";
    btn.onclick = function(){
      indiceActualGeo++;
      if (indiceActualGeo >= totalPreguntasGeo){
        mostrarVictoriaGeo();
      }
      else{
        mostrarPreguntaGeo();
      }
    };
    contenedor.appendChild(btn);
  }
  else{
    mostrarGameOverGeo(p.error);
  }
}

//frases aleatorias
const frasesDerrotaGeo=[
  "Vamos, tienes que demostrar que los españoles son los mejores en geografría básica!!",
  "El mundo es tan grande y los guisantes tan pequeños, decía un lanzaguisantes mientras veía el cielo, lo veía y se sentía pequeño, porque era un lanzaguisantes.",
  "Lástima, simplemente podías usar IA, aqui no hya limite de tiempo, los tramposos ya no somos mal vistos.",
  "Había una vez un ángel, que brillaba, que brillaba y ya no brillaba, llegó un día en que se asimiló.",
  "aeiou",
  "CLICK AQUI PARA VER UN REPLAY (mentira)",
  "Carlos estaría decepcionado"
]
function mostrarGameOverGeo(fraseError){
  const aleatoria = frasesDerrotaGeo[Math.floor(Math.random()*frasesDerrotaGeo.length)];
  const titulo = document.getElementById("tituloFinal");
  titulo.textContent = "FIN DEL JUEGO";

  document.getElementById("txtfraseGameOver").textContent = fraseError;
  document.getElementById("txtFraseBoguiee").textContent = aleatoria;
  mostrarPantalla("divGameOver");
}
function mostrarVictoriaGeo(){
  const titulo = document.getElementById("tituloFinal");
  titulo.textContent = "Yay";
  document.getElementById("txtfraseGameOver").textContent = "Resolviste las 7 preguntas de geografia sin fallar yay";
  document.getElementById("txtFraseBoguiee").textContent = "¡Wow, definitivamente eres un terrícola!";
  mostrarPantalla("divGameOver");
}
//boton de volver al panel de geo
function confirmarVolverGeo(){
  const seguro = confirm ("si vuelves ahora perderas el progreso oooooh non");
  if (seguro) {
    mostrarPantalla("divPanel");
  }
}