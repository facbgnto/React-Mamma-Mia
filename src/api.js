
const endpoint = "./pizzas.json";

 async function fetchPizzas(){
    try {
        const url = endpoint;
        const response = await fetch(url)
        const  results  = await response.json();
       
        return results

    } catch (e) {
        console.error(e.message)    
    }
  

}


async function fetchPokemon(name){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        const data = await response.json();
        return  data;
    } catch (e) {
        console.error(e.message)
        
    }
 }

export {
    fetchPizzas,
    fetchPokemon,
 
}
