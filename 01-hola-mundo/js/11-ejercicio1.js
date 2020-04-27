'use strict';

/*Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales*/
/*Plus: Si los números no son un número o son iguales o menores a cero, no los vuelva a pedir */

let number1 = parseInt(prompt('Introduce el primer número', 0));
let number2 = parseInt(prompt('Introduce el segundo número', 0));

while (number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN(number2)) {
    number1 = parseInt(prompt('Introduce el primer número', 0));
    number2 = parseInt(prompt('Introduce el segundo número', 0));
}

if (number1 === number2) {
    alert('lLos números son iguales');
} else if (number1 > number2) {
    alert('El número mayor es: ' + number1);
    alert('El número menor es: ' + number2);
} else if (number2 > number1) {
    alert('El número mayor es: ' + number2);
    alert('El número menor es: ' + number1);
} else {
    alert('Introduce números correctos');
}