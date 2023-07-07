/* https://pokeapi.co/api/v2/pokemon?limit=10 */



const getPoke = async () => {

    try {
        let informacion = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
        let datos = informacion.data.results;
        datos.forEach(pokemon => {
            let url = pokemon.url;
            getFoto(url)
        })

    } catch (error) {
        console.log(error);
    }
};



const getFoto = async (url) => {

    try {
        let Data = await axios.get(url)
        addPoke(Data)
    } catch (error) {
        console.log(error)
    }

}
const pokemones = document.querySelector("#pokemones");

function addPoke(Data){
    let inyectarHTML = `
        <div class="col-4">
            <div class="card">
                <img src="${Data.data.sprites.front_default}" alt="">
                <div class="info-card">
                    <p class=text-center>${Data.data.name}</p>
                </div>  
            </div>
        </div>
    `

pokemones.innerHTML += inyectarHTML 

}



