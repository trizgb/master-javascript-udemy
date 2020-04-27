'use strict';

// Parámetros rest y spread

// Rest
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log(`Fruta 1: ${fruta1}`);
    console.log(`Fruta 2: ${fruta2}`);
    console.log(resto_de_frutas);
}

listadoFrutas('Naranja', 'Manzana', 'Sandía', 'Pera', 'Melón', 'Coco');

// Spread
let frutas = ['Naranja', 'Manzana']
listadoFrutas(...frutas, 'Sandía', 'Pera', 'Melón', 'Coco');