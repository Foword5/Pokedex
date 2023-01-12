window.onload = main;


async function main(){
    let pokemonList = await fetchPokemonList(0,10000); // fetching all the pokemons
    
    let pokedexDiv = document.getElementById("pokedex"); // getting the pokedex element to add the pokemon to 

    for(let pokemonUrl of pokemonList){ // adding every pokemon to the page
        let pokemon = await fetchPokemonInfo(pokemonUrl.url);
        pokedexDiv.appendChild(await createPokemonContainer(pokemon));
    }
}