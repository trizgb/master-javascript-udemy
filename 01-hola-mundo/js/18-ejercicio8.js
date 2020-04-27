'use strict';

/**
 * Calculadora:
 * - Pida dos números por pantalla
 * - Si metemos uno mal que nos los vuelva a pedir
 * - En el body de la página en una alerta y por la consola el resultado de sumar, restar,
 * multiplicar y dividir esas dos cifras
 */

let numero1 = parseInt(prompt('Introduce el primer número', 0));
let numero2 = parseInt(prompt('Introduce el segundo número', 0));


while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

let resultado = `
                La suma es: ${numero1 + numero2}<br/>
                la resta es: ${numero1 - numero2}<br/>
                la multiplicación es: ${numero1 * numero2}<br/>
                la división es: ${numero1 / numero2}<br/>
            `;

let resultadocmd = `
                La suma es: ${numero1 + numero2}\n
                la resta es: ${numero1 - numero2}\n
                la multiplicación es: ${numero1 * numero2}\n
                la división es: ${numero1 / numero2}\n
            `;
document.write(resultado);
alert(resultadocmd);