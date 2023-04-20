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



function mostrarPersonas(){
    personas.map(persona => {
        const personaHtml = `
        <article>
        <div class="container-img">
            <img src="${persona.avatar}">
        </div>
        <div class="container-info">
        <p class="nombre">${persona.name}</p>
        <p class="titulo">${persona.title}</p>
        <button class="btn"><i class="icon-btn"></i>${persona.buttontext}</button>
        </div>
        </article>
        `
        container.innerHTML += personaHtml;
    });
}

function agregarPersona(persona){
    personas.push(persona);
}

agregarPersona({
    "name": "Jessica Jones",
    "title": "Copywriter",
    "buttontext": "View Text",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
});
agregarPersona({
    "name": "Jessica Jones",
    "title": "Copywriter",
    "buttontext": "View Text",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
});
agregarPersona({
    "name": "Jessica Jones",
    "title": "Copywriter",
    "buttontext": "View Text",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
});
agregarPersona({
    "name": "Jessica Jones",
    "title": "Copywriter",
    "buttontext": "View Text",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
});
mostrarPersonas();


