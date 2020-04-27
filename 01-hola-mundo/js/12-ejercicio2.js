'use strict';

/*
*Utilizando un bucle, mostrar la suma y la media de los números
*introducidos hasta introducir un número negativo y así mostrar el resultado
*/

let suma = 0;
let contador = 0;

do {
    let numero = parseInt(prompt('Introduce números hasta que metas uno negativo', 0));

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        // suma = suma + numero;
        suma += numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);
} while (numero >= 0)

alert('La suma de todos los números es: ' + suma);
alert('La media de todos los números es: ' + (suma / contador));