'use strict';

// Array multidimensional -> array dentro de otro array

let categorias = ['Accion', 'Terror', 'Comedia'];
let peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

peliculas.sort(); // Ordenar array
peliculas.reverse(); // Orden inverso
console.log(peliculas);

let cine = [categorias, peliculas];

// console.log(cine[0][1]);

// Operaciones con arrays

/*
let elemento = '';

do {
    elemento = prompt('Introduce tu película');
    peliculas.push(elemento); // Añade un elemento al array
} while (elemento !== 'Acabar');

peliculas.pop(); // Elimina el último elemento de un array
peliculas[0] = undefined; // Modifica un elemento concreto del array
*/

let indice = peliculas.indexOf('Gran Torino') // Busca en el array

if (indice > -1) {
    peliculas.splice(indice, 1) // Permite eliminar tantos indices como indiques
}

let peliculas_string = peliculas.join() // Para convertir un array en string

let cadena = 'texto1, texto2, texto3';

let cadena_array = cadena.split(', '); // Convertir string en array

console.log(cadena_array);
