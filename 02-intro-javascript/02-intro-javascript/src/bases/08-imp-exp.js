// Import, export y funciones comunes de arreglos

import heroes, { owners } from "./data/heroes";


// Find
const getHeroeById = (id) => heroes.find( heroe => heroe.id === id);

console.log(getHeroeById(1));


// Filter
const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner);

console.log(getHeroesByOwner( 'Marvel' ));


console.log(owners);