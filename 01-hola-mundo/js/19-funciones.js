'use strict';

// Funciones

function calculadora(a, b, mostrar = false) {

    // if (mostrar === false) {
    //     console.log('Suma: ' + (a + b));
    //     console.log('Resta: ' + (a - b));
    //     console.log('Multiplicación: ' + (a * b));
    //     console.log('División: ' + (a / b));
    //     console.log('---------------------------');
    // } else {
    //     document.write('Suma: ' + (a + b) + '<br/>');
    //     document.write('Resta: ' + (a - b) + '<br/>');
    //     document.write('Multiplicación: ' + (a * b) + '<br/>');
    //     document.write('División: ' + (a / b) + '<br/>' );
    //     document.write('---------------------------' + '<br/>');
    // }
    if (mostrar === false) {
        porConsola(a, b);

    } else {
        porPantalla(a, b);
    }

    return true;
}

// calculadora(5, 4);
// calculadora(9, 20);

// for (let i = 1; i <= 10; i++) {
//     calculadora(i, 8);
// }

calculadora(1, 4);
calculadora(2, 5, true);

function porConsola(a, b) {
    console.log('Suma: ' + (a + b));
    console.log('Resta: ' + (a - b));
    console.log('Multiplicación: ' + (a * b));
    console.log('División: ' + (a / b));
    console.log('---------------------------');
}

function porPantalla(a, b) {
    document.write('Suma: ' + (a + b) + '<br/>');
    document.write('Resta: ' + (a - b) + '<br/>');
    document.write('Multiplicación: ' + (a * b) + '<br/>');
    document.write('División: ' + (a / b) + '<br/>');
    document.write('---------------------------' + '<br/>');
}