let  i = 0;

while (i < 20){   // este WHILE es un bucle que se ejecuta mientras la condición sea verdadera.
    i++;

    if (i === 9){
        continue;
    } 

    if ( i === 19){
        break;
    }

    // Esta cuenta nos lleva a 10,
    //  pero no se imprime porque se rompe el bucle con el break

    console.log("Estos son los numeros", i);
}

// En este caso, el bucle se rompe cuando i es igual a 19,