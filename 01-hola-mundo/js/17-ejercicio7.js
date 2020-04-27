'use strict';

/**
 * Tabla de multiplicar de un número introducido por pantalla
 */

let number = parseInt(prompt('¿De qué número quieres la tabla?', 1));

document.write(`<h1>Tabla del ${number}</h1>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${i} x ${number} = ${i * number} <br/>`);
}

// Todas las tablas
for (let c = 1; c <= 10; c++) {
    document.write(`<h1>Tabla del ${c}</h1>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${i} x ${c} = ${i * c} <br/>`);
    }
}