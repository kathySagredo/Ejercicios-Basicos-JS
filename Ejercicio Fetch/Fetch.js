function fetchDatos() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {
        allpokemon.results.forEach(pokemon =>{
            getPoke(pokemon);
        })
    })
}   

function getPoke(pokemon) {
    let url=pokemon.url;
    fetch(url)
    .then(res=>res.json()).then(pokeData=>{
        addPoke(pokeData);
    })
}

const listaPoke = document.getElementById("pokemon");


function addPoke(poke) {
    const inyectarHTML = `<li>${poke.name} <img src="${poke.sprites.front_default}"></li>`;
    listaPoke.innerHTML += inyectarHTML;
}



