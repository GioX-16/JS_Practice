let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('accion de listar');
        break;
    case 'guardar':
        console.log('accion de guardar');
        break;
        default:
            console.log('accion no reconocida');
            break;
}

// En este ejercicio se utiliza la estructura de control switch para evaluar la variable accion y ejecutar el código correspondiente al caso que coincida con el valor de la variable. En este caso, la variable accion tiene el valor de 'listar', por lo que se imprime en consola 'accion de listar'.

// otro ejemplo para utilizar SWITCH 

let dia = 3;

switch (dia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('No es un día de la semana');
        break;
}


// En este ejemplo se imprime el día de la semana según el número que se le asigne a la variable dia.