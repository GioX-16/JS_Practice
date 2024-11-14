// LIstado de isntrucciones , procedimientos, funciones


// function --> todo lo que este a la derecha sera el nombre de la funcion
function saludar() {
    console.log('Hola Mundo');
}
saludar();


// return se toma para la reutilizacion de codigo 
function suma(){
    return 3 + 2;
}

function suma2(){
    return 2+4;
}

let resultado = suma2(); 
console.log(resultado); 


// Otra opcion para utilizar o realizar la suma
// Dentro del mismo console se puede tomar la funcion que se establecio y que muestre el resultado
console.log(suma());

