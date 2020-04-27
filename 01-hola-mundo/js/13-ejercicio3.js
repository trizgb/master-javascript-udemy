'use strict';

/*
 * Hacer un programa que muestre todos los núumeros entre dos números introducidos por el usuario
 */

let numero1 = parseInt(prompt('Introduce el primer número', 0));
let numero2 = parseInt(prompt('Introduce el segundo número', 0));

document.write(`<h2>De ${numero1} a ${numero2} están estos números:</h2>`);

for (let i = numero1; i <= numero2; i++) {
    document.write(i + '<br/>');
}