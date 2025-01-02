// short-circuit

// Falsy - falso
// false
// 0
// null
// undefined
// NaN

let nombre = 'sandino';
let username = nombre || 'User';
console.log(username); // gio

function fn1() {
    console.log('primero Dios');
    return false;
}

function fn2() {
    console.log('Despues yo');
    return true;
}

let gio1 = fn1() && fn2(); // Aqui esta mostrando en consola especificamente las que son true.

/* console.log(gio1);  */