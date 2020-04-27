'use strict';

/**
 * Muestre todos los números divisores de un número introducido en un prompt
 */

 let numero = parseInt(prompt('Mete un número', 1));

for (let i = 1; i < numero; i++) {

    if(numero%i === 0) {
        console.log(`Divisor: ${i}`)
    }
}