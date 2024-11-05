// personajes de ANIME 

let nombre = "Tatsumi";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
    nombre: "Tatsumi",
    anime: "Demon slayer",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

/* personaje.edad = 17; */

let llaves = 'edad';
personaje ['llaves'] = 17;

delete personaje.anime;

console.log(personaje);