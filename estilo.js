window.onload = (event) => {
    buscarDato()
};

const apiurl = 'https://rickandmortyapi.com/api/character';
var results = []
const card_container = document.getElementById("card-container")
const personajes = document.getElementById("Personajes");

const buscarDato = async () => {
    try {
        const res = await fetch(apiurl);
        const data = await res.json();
        results = data.results;
        let listado = '';
        let personaje = '';

        for (let i = 0; i < 18; i++) {
            listado += `
            <div class="card" >
                <img src="${results[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${results[i].name}</h5>
                    </div>
            </div>
        `
            personaje += `
            <option>${results[i].name}</option>
            `
        }
        card_container.innerHTML = listado;
        personajes.innerHTML = `<option selected="selected">Ver todos</option> ${personaje}`
    }
    catch (err) {
        console.log(err)
    }
}

const veruno = async (name) => {
    try {
        const res = await fetch(apiurl);
        const data = await res.json();
        results = data.results;
        let listado = '';
        const charter_data = results.filter((charter) => charter.name === name)
        card_container.innerHTML = `<div class="card" >
                <img src="${charter_data[0].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${charter_data[0].name}</h5>
                    </div>
            </div>`
    }
    catch (err) {
        console.log(err)
    }
}

const nombre = document.getElementById("Personajes")

const optonerNombre = () => {
    return nombre.value;
}

nombre.addEventListener("change", (event) => {
    if (optonerNombre() != "Ver todos") {
        veruno(optonerNombre())
    } else {
        buscarDato()
    }
})
