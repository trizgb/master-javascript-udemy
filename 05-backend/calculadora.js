'use strict';

let params = process.argv.slice(2);

let number1 = parseFloat(params[0]);
let number2 = parseFloat(params[1]);

let plantilla= `
La suma es: ${number1 + number2}
La resta es: ${number1 - number2}
La multiplicación es: ${number1 * number2}
La división: ${number1 / number2}
`;

console.log(plantilla);
// console.log('Hola mundo con NodeJS');