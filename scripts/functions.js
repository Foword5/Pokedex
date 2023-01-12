/**
 * Fetch all the pokemon between the offset and the limit
 * @param {int} offset the first pokemon
 * @param {int} limit the last pokemon
 * @returns the json containing the pokemon
 */
async function fetchPokemonList(offset, limit){
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
    .then(resp => resp.json())
    .catch(err => console.log('error while fetch: ', err))
    return pokemons.results
}
/**
 * Fetch the information about a pokemon in particular
 * @param {string} link the link to the pokemon
 * @returns the information in json format
 */
async function fetchPokemonInfo(link){
    const info = await fetch(link);
    let data =  await info.json();
    return data;
}

/**
 * Create a html container for the pokemon
 * @param {json} pokemon the json object of the pokemon
 * @returns the html object containing everything
 */
async function createPokemonContainer(pokemon){
    let container = document.createElement("div"); //the main container of the pokemon
    container.setAttribute("class","pokemon") 

    let idDiv = document.createElement("div"); // the div containing the id
    idDiv.setAttribute("class","id");
    idDiv.appendChild(document.createTextNode(pokemon.id));
    
    let nameDiv = document.createElement("div"); // the div containing the name
    nameDiv.setAttribute("class","name");
    nameDiv.appendChild(document.createTextNode(pokemon.name));

    let image = document.createElement("img"); // the image of the pokemon
    image.setAttribute("src",pokemon.sprites.front_default);
    image.setAttribute("alt","sprite of " + pokemon.name);
    image.setAttribute("class","pokeImage");

    let typesDiv = document.createElement("div"); // the div containing the divs of type 
    typesDiv.setAttribute("class","type");

    for(type of pokemon.types){ // adding the different type the pokemon has
        let typeDiv = document.createElement("div");
        typeDiv.setAttribute("class",type.type.name);
        typeDiv.appendChild(document.createTextNode(type.type.name));
        typesDiv.appendChild(typeDiv);
    }

    container.appendChild(idDiv); //adding all the divs to the main container
    container.appendChild(nameDiv);
    container.appendChild(image);
    container.appendChild(typesDiv);

    return container;
}