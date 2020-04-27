'use strict';

// DOM - Document Object Model

// Elementos con un ID concreto

// let caja = document.getElementById('micaja');
let caja = document.querySelector('#micaja');

function cambiaColorBCG(colorBCG) {
    caja.style.background = colorBCG;
}

caja.innerHTML = 'Texto en la caja desde JS';
caja.style.padding = '20px';
caja.style.width = '300px';
caja.style.color = 'white';
caja.className = 'hola';

cambiaColorBCG('red');
console.log(caja);

// Elementos por etiqueta
let todosLosDivs = document.getElementsByTagName('div');
// let contenido = todosLosDivs[2].textContent; // Sacar el contenido que tiene el div
//     todosLosDivs[2].innerHTML = 'Otro texto para el segundo elemento';

let seccion = document.querySelector('#mi-seccion');
let hr = document.createElement('hr');


let valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent === 'string') {
        let parrafo = document.createElement('p');
        let texto = document.createTextNode(todosLosDivs[valor].textContent);

        parrafo.appendChild(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

// console.log(todosLosDivs);
// console.log(contenido);

// Elementos por clase
let divsRojos = document.getElementsByClassName('rojo');
let div;

for (div in divsRojos) {
    if (divsRojos[div].className === 'rojo') {
        divsRojos[div].style.background = 'red';
    }
}

console.log(divsRojos);

// Query Selector
let etiqueta = document.querySelectorAll('div');
console.log(etiqueta);

let claseRojo = document.querySelectorAll('.rojo');