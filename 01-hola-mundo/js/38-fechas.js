'use strict';

// Fechas en JS
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();

let hourText = `
    El año es: ${year}
    El mes es: ${month}
    El día es: ${day}
    La hora es: ${hour}
`;

console.log(hourText);

// Funciones matemáticas en JS
console.log(Math.ceil(Math.random()*100));

