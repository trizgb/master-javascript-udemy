'use strict';

/*
 * 1. Pida 6 numeros por pantalla y los añada a un array
 * 2. Mostrar el array entero en el cuerpo de la página y en la consola
 * 3. Ordenar el array y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuántos elementos tiene el array
 * 6. Hacer una búsqueda de un valor introducido por el usuario y que diga si está y su índice
 */

function mostrarArray(elementos, textoCustom = '') {
    document.write(`<h1>Contenido del array ${textoCustom}</h1>`);
    document.write(`<ul>`);
    elementos.forEach((elemento, index) => {
        document.write(`<li>${elemento}</li>`)
    });
    document.write(`</ul>`);
}

// let numeros = new Array(6);
let numeros = [];

for (let i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt('Introduce un número', 0));
    numeros.push(parseInt(prompt('Introduce un número', 0)));
}

mostrarArray(numeros);
console.log(numeros);


numeros.sort(function (a, b) { return a - b }); //orden ascendente
mostrarArray(numeros, 'ordenado');

numeros.reverse();
mostrarArray(numeros, 'revertido');


document.write(`<h1>El array tiene: ${numeros.length} elementos</h1>`);


let busqueda = parseInt(prompt('Busca un número', 0));

let posicion = numeros.findIndex(numero => numero === busqueda);

if (posicion === true && posicion !== -1) {
    document.write(`<h1>ENCONTRADO</h1>`);
    document.write(`<h1>Posición de la búsqueda ${posicion}</h1>`)
} else {
    document.write(`<h1>NO ENCONTRADO</h1>`);
}

