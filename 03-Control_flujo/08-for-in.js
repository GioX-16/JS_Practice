let user = {
    id: 1,
    name: 'Gio',
    age: 23,
} ;

for (let prop in user) {
    console.log(prop, user [prop]);
}


let animales = ['perro', 'gato', 'pez', 'loro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);

}