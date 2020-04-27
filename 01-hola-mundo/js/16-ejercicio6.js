'use strict';

/**
 * Saber si un número es par o impar
 * 1. Ventana
 * 2. Si no es válido, que no pida de nuevo el número
 * 3. Mostrar si es par o impar
 */

 let number = parseInt(prompt('Introduce un número', 0));

 while(isNaN(number)) {
    number = parseInt(prompt('Introduce un número', 0));
 }

 if (number % 2 === 0) {
    alert('Es par');
 } else {
     alert('Es impar')
 }