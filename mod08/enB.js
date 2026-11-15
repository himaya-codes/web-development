async function fetchData() {
    console.log("Fetching start...");
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if(response.ok) {
            const res_data = await response.json();
            return res_data;
        }
        else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function addPokemonTypes(event, url){
    const pokemonData = await fetchData(url);
     console.log(pokemonData);
    const pokemonDiv = event.target.parentElement;
    for(let type of pokemonData.types) {
        let typeText = document.createElement("p");
        typeText.textContent = type.type.name;
        pokemonDiv.appendChild(typeText);
    }
   
}

async function createPokemonList() {
    let returnPromise = await fetchData("https://pokeapi.co/api/v2/pokemon");
    const pokemonDiv = document.querySelector("#pokemon-content");
    for(let pokemen of returnPromise.results) {
        let pokeText = document.createElement("p");
        let pokeDev = document.createElement("div");
        pokeText.textContent = pokemen.name;
        pokeText.addEventListener("click", function(event) {
            addPokemonTypes(event, pokemen.url);
        });
        pokeDev.appendChild(pokeText);
        pokemonDiv.appendChild(pokeDev);
    }
}

createPokemonList();