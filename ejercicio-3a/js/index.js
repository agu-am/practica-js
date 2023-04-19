const personas = [{
    "name": "Jonh Smith",
    "title": "Newbie Programer",
    "buttontext": "Follow",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
}, {
    "name": "Alesha Doe",
    "title": "FullStack Programer",
    "buttontext": "Add Friend",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
},{
    "name": "Jessica Jones",
    "title": "Copywriter",
    "buttontext": "View Text",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
}]

const container = document.querySelector("#container")

personas.map(persona => {
    const personaHtml = `
    <article>
    <div class="container-img">
        <img src="${persona.avatar}">
    </div>
    <p class="nombre">${persona.name}</p>
    <p class="titulo">${persona.title}</p>
    <button class="btn">${persona.buttontext}</button>
    </article>
    `
    container.innerHTML += personaHtml;
});


