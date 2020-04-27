'use strict';

// Plantillas de texto

let nombre = prompt('Introduce un nombre');
let apellidos = prompt('Introduce tus apellidos');

let texto = `
<h1>Hola! Qué tal?</h1>
<h3>Mi nombre es: ${nombre}.</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);