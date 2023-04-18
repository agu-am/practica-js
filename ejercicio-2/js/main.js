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
    opciones: ["America del Sur", "Europa", "America Central"],
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
    respuesta: 2
  }
];

const textoPregunta = document.querySelector("#pregunta");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btnSiguiente = document.querySelector('#btnSiguiente');
const btnReiniciar = document.querySelector('#btnReiniciar');
const botones = document.querySelectorAll('.btn-respuesta');
const textoPuntos = document.querySelector("#puntos");
const textoResultado = document.querySelector("#resultadoResp");

let preguntaActual = 0;
let puntos = 0;

btnReiniciar.style.display = 'none';

function mostrarPregunta() {
  const objPregunta = preguntas[preguntaActual];
  textoPregunta.textContent = objPregunta.pregunta;
  botones.forEach((boton, index) => boton.textContent = objPregunta.opciones[index])
}

function validarRespuesta(respuesta) {
  const objPregunta = preguntas[preguntaActual];
  if (respuesta === objPregunta.respuesta) {
    puntos += 10;
    // textoResultado.textContent = "¡Correcto!";
    const botonCorrecto = botones[objPregunta.opciones.findIndex(opcion => opcion === objPregunta.opciones[objPregunta.respuesta])];
    botonCorrecto.classList.add('correcto');
  } else {
    puntos -= 10;
    // textoResultado.textContent = "Incorrecto :(";
    const botonIncorrecto = botones[respuesta];
    botonIncorrecto.classList.add('incorrecto');
  }
  botones.forEach(boton => boton.disabled = true);
  textoPuntos.textContent = puntos;
  preguntaActual++;
}

function siguientePregunta() {
  botones.forEach(boton => {
    boton.classList.remove('correcto', 'incorrecto');
  });
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    textoPregunta.textContent = "¡Juego terminado!";
    botones.forEach(boton => boton.style.display = 'none')
    btnSiguiente.style.display = 'none';
    textoResultado.style.display = 'none';
    btnReiniciar.style.display = 'unset';
  }
  botones.forEach(boton => boton.disabled = false);
}

function reiniciarJuego() {
  preguntaActual = 0;
  mostrarPregunta();
  botones.forEach(boton => boton.disabled = false);
  botones.forEach(boton => boton.style.display = 'unset');
  textoPuntos.style.display = 'unset';
  puntos = 0;
  textoPuntos.textContent = puntos;
  btnReiniciar.style.display = 'none';
  btnSiguiente.style.display = 'unset';
}

btn0.addEventListener('click', () => validarRespuesta(0));
btn1.addEventListener('click', () => validarRespuesta(1));
btn2.addEventListener('click', () => validarRespuesta(2));

btnSiguiente.addEventListener('click', () => siguientePregunta());

btnReiniciar.addEventListener('click', () => reiniciarJuego());

mostrarPregunta();
