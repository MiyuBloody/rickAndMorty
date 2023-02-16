const rickAndMorty = document.getElementById('rickAndMorty');
//let urlRickAndMorty = "https://rickandmortyapi.com/";
let urlCharacter = "https://rickandmortyapi.com/api/character"
/* let urlLocations = "https://rickandmortyapi.com/api/location"
let urlEpisodes = "https://rickandmortyapi.com/api/episode" */

let escribirHtml = "";
let results = [];
let btnNext
let bntPrev

/* const llamarApiRickAndMorty = async (url) => {
    try {
        const resp = await fetch(url);
        const results = await resp.json();
        console.log(results);
        pintarRickAndMorty(results.results)
    } catch (error) {
        console.log(error)
    }
};

llamarApiRickAndMorty(urlRickAndMorty) */

const llamarApiRickAndMortyCharacter = async (url) => {
    try {
        const resp = await fetch(url);
        results = await resp.json();
        results = results.results;
        pintarRickAndMortyCharacter(results, "")
    } catch (error) {
        console.log(error)
    }
};

llamarApiRickAndMortyCharacter(urlCharacter)

/* const llamarApiRickAndMortyLocations = async (url) => {
    try {
        const resp = await fetch(url);
        const results = await resp.json();
        console.log(results);
        pintarRickAndMorty(results.results)
    } catch (error) {
        console.log(error)
    }
};

llamarApiRickAndMortyLocations(urlLocations) */

/* const llamarApiRickAndMortyEpisodes = async (url) => {
    try {
        const resp = await fetch(url);
        const results = await resp.json();
        console.log(results);
        pintarRickAndMorty(results.results)
    } catch (error) {
        console.log(error)
    }
};

llamarApiRickAndMortyEpisodes(urlEpisodes) */

const pintarRickAndMortyCharacter = async (data, nombre) => {
    try {
        rickAndMorty.innerHTML = '';
        for (const item of data) {
            /*
            const response = await fetch(index.url)
            const resul = await response.json();
            console.log(resul);
            */
            if (nombre == null || item.name.toLowerCase().includes(nombre)) {
                escribirHtml = `<div class= "caja">
                <div> <p> <img class = img src = ${item.image} alt = ${item.name}</img></p></div>
                <div class = id><p> ${item.id}</p></div>
                <div class = name><p> ${item.name}</p></div>
                <div class= status><p> ${item.status}</p> </div>
                <div class= species><p> ${item.species}</p> </div></p>
                </div>`

                rickAndMorty.innerHTML += escribirHtml;
            }
        }

    } catch (error) {
        console.log(error);
    }

}


function buscarNombre() {
    let nombre;
    nombre = document.getElementById("buscador")
    pintarRickAndMortyCharacter(results, nombre.value.toLowerCase())

    /*
    .forEach(nom => {
        nom.innerHTML.toLowerCase().includes(nombre.value.toLowerCase()) 
    });
*/
    //elegirTodasLasEtiquetasP = document.querySelectorAll(".name p")

    /*   .forEach (nom =>
          nom.innerHTML.toLowerCase().includes(nombre.value.toLowerCase())//en vez de innerHTML textDocument y hace lo mismo
          ?nom.classList.remove("filtro")
          :nom.classList.add("filtro")  
          )*/


    //paginación
    

}



