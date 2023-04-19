const nombres = ["Juan", "Pedro", "Ana", "Amapola", "Manuel"];

function mostrarListaNombres() {
    const listNombres = document.querySelector('#lista');

    const liNombres = nombres.map(nombre => `<li>${nombre}</li>`)

    const nombresHtml = liNombres.join('');

    listNombres.innerHTML = nombresHtml;
}

function agregarNombre(nombre) {
    nombres.push(nombre)
    mostrarListaNombres();
}

mostrarListaNombres();