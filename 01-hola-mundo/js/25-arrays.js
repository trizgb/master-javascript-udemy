'use strict';

// Arrays

let nombre = 'Beatriz';
let nombres = ['Beatriz', 'Lucas', 'Leo', 'Freya', 'Ray'];

let lenguajes = new Array('PHP', 'Javascript', 'Go', 'Python');

// console.log(nombres[2]); // Acceder al índice
// console.log(nombres.length); // Ver la longitud del array
// console.log(lenguajes);


/*
let elemento = parseInt(prompt('¿Qué elemento del array quieres?', 0));
// alert(nombres[elemento]);

if (elemento >= nombres.length) {
    alert('Introduce el número correcto menor que' + nombres.length);
} else {
    alert('El usuario seleccionado es: ' + nombres[elemento]);
}
*/

document.write(`<h1>Lenguajes de programación de 2020</h1>`);

document.write(`<ul>`);

// for (let i = 0; i < lenguajes.length; i++) {
//     document.write(`<li>${lenguajes[i]}</li>`);
// }

// For each itera todo el array y lo muestra, es mucho más limpio que el for(let...)
// lenguajes.forEach((elemento, index, arr) => {
//     document.write(`<li>${index} ${elemento}</li>`);
//     console.log(arr);
// });

for(let lenguaje in lenguajes) {
    //lenguaje es el indice
    document.write(`<li>${lenguajes[lenguaje]}</li>`);
}

document.write(`</ul>`);


// Busquedas

let busqueda = lenguajes.find(lenguaje => lenguaje === 'PHP');
    busqueda = lenguajes.findIndex(lenguaje => lenguaje === 'PHP'); // Permite sacar el indice en el cual se encuentra

let precios = [10, 20, 50, 80, 12];
busqueda = precios.some(precio => precio > 79); // Buscar que se cumpla una condición concreta


console.log(busqueda);


