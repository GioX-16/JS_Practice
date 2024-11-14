
// cuando Referencias los valores DENTRO de una funcion se le llama PARAMETRO
function suma(a) {
    console.log(arguments);
    return a + 2;
}

// Los valores que se les pasan a las funciones se llaman ARGUMENTOS // 
let resultado = suma(6, 5, 7, 8, 9);
console.log(resultado);
console.log(typeof suma);

// las funciones pueden resivir multiples parametros y argumentos


