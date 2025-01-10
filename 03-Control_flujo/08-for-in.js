let user = {
    id: 1,
    name: 'John',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

// id 1 // prop es el nombre de la propiedad

// aqui estamos trabajando con un objeto, y no con un array