'use strict';

// Transformación de textos

let numero = 444;
let texto1 = 'Que pasa tron ';
let texto2 = 'Pos naaaa';

// let dato = numero.toString(); // convertir a string
//     dato = texto1.toUpperCase(); // convertir texto a mayúscula
//     dato = texto1.toLowerCase(); // convertir texto a minúscula

// console.log(dato);

// Calcular longitud

// let nombre = 'Chiquitulfia';
//     nombre = ['Hola']

// console.log(nombre.length); // cuenta las letras / elementos que tiene un string / array, etc

// Concatenar

// let textoTotal = texto1 + ' ' + texto2;
// let textoTotal = texto1.concat(' ' + texto2);
// console.log(textoTotal)

// Búsqueda

let busqueda = texto1.indexOf('tron');
    busqueda = texto1.lastIndexOf('tron');
    busqueda = texto1.search('tron'); // es un alias de indexOf
    busqueda = texto1.match('tron'); // solo primera coincidencia
    busqueda = texto1.match(/tron/g); // para más coincidencias
    busqueda = texto1.substr(9, 4); // primer elemento es a partir del nº de caracteres, el segundo es la longitud
    busqueda = texto1.charAt(5); // sacar una letra/elemento en concreto
    busqueda = texto1.startsWith('Que'); // buscar un texto y da true o false en función de si lo encuentra
    busqueda = texto1.endsWith('tron');
    busqueda = texto1.includes('tron'); // busca una palabra
 
console.log(busqueda);

// Reemplazar

let reemplazo = texto1.replace('tron', 'colega');
    reemplazo = texto1.slice(9); // Permite separar un string a partir del caracter que se quiera
    reemplazo = texto1.split(); // Recortar y meterlo en un array y tener una colección
    reemplazo = texto1.split(' '); // Recorta por palabra y lo mete en un array para tener una colección
    reemplazo = texto1.trim(); // Recorta o quita espacios delante y detrás del string

console.log(reemplazo);

