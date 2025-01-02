let edad = 20;

if (edad > 17) {
    console.log('Usuario es Mayor de Edad'); 
    // La consola muestra la primera condicion porque es la primera que se cumple
} else if (edad > 13) {
    console.log('Nesesita una persona mayor para Ingresar'); 
    // En caso de que la primera condicion no se cumpla, se ejecuta la segunda
} else {
    console.log('El usuario no Puede ingresar'); 
    // En caso de que ninguna de las condiciones anteriores se cumpla, se ejecuta esta
}

