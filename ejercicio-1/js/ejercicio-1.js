const preguntas = [{
    pregunta: "Que colores contiene la bandera Argentina?",
    opciones: "1- Rojo y Negro\n2- Celeste y blanco\n3- Verde y amarillo",
    correcta: "2"
},
{
    pregunta: "Quien es el presidente de Argentina?",
    opciones: "1- Fernandez\n2- Biden\n3- Boric",
    correcta: "1"
},
{
    pregunta: "En que contiente se encuentra Mexico?",
    opciones: "1- Asia\n2- America\n3- Oceania",
    correcta: "2"
},
{
    pregunta: "Cual es la capital de Santa Fe?",
    opciones: "1- Santa Fe\n2- Vera\n3- Rosario",
    correcta: "1"
},
{
    pregunta: "Cual es la capital de Uruguay?",
    opciones: "1- Durazno\n2- Canelones\n3- Montevideo",
    correcta: "3"
}
]

function iniciarJuego() {

    let puntaje = 0;

    for (let i = 0; i < preguntas.length; i++) {
        let respuestaUsuario = prompt(`${preguntas[i].pregunta} \n${preguntas[i].opciones}`)
        if (respuestaUsuario === preguntas[i].correcta) {
            alert('¡Correcto!')
            puntaje += 10
        } else {
            alert('¡Incorrecto!')
            puntaje -= 10
        }
    }

    alert(`Tu puntje final es ${puntaje} puntos.`)
}
iniciarJuego();