// Define las preguntas
const preguntas = [
  {
    pregunta: "¿En qué continente se encuentra el país de Nigeria?",
    opciones: ["Asia", "África", "America del Sur"],
    respuesta: 1
  },
  {
    pregunta: "¿En qué continente se encuentra el país de Japón?",
    opciones: ["Europa", "Asia", "Oceanía"],
    respuesta: 1
  },
  {
    pregunta: "¿En qué continente se encuentra el país de Colombia?",
    opciones: ["America del Sur", "America del Norte", "America Central"],
    respuesta: 0
  },
  {
    pregunta: "¿En qué continente se encuentra el país de Egipto?",
    opciones: ["Europa", "Asia", "África"],
    respuesta: 2
  },
  {
    pregunta: "¿En qué continente se encuentra el país de Nueva Zelanda?",
    opciones: ["Asia", "Europa", "Oceanía"],
    respuesta: 0
  }
];

let preguntaActual = 0;
let puntos = 0;

const textoPregunta = document.querySelector("#pregunta");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const textoPuntos = document.querySelector("#puntos");
const textoResultado = document.querySelector("#resultadoResp");

function mostrarPregunta() {
  const objPregunta = preguntas[preguntaActual];
  textoPregunta.textContent = objPregunta.pregunta;
  btn0.textContent = objPregunta.opciones[0];
  btn1.textContent = objPregunta.opciones[1];
  btn2.textContent = objPregunta.opciones[2];
}

function validarRespuesta(respuesta) {
  const objPregunta = preguntas[preguntaActual];
  if (respuesta === objPregunta.respuesta) {
    puntos += 10;
    textoResultado.textContent = "¡Correcto!";
  } else {
    puntos -= 10;
    textoResultado.textContent = "Incorrecto :(";
  }
  textoPuntos.textContent = puntos;
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    textoPregunta.textContent = "¡Juego terminado!";
    btn0.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "none";
  }
}

btn0.addEventListener("click", function() {
  validarRespuesta(0);
});
btn1.addEventListener("click", function() {
  validarRespuesta(1);
});
btn2.addEventListener("click", function() {
  validarRespuesta(2);
});

mostrarPregunta();
