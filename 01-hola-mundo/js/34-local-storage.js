'use strict';

// Local Storage

// Comprobar disponibilidad del Local Storage

if(typeof(Storage) !== 'undefined') {
    console.log('LocalStorage disponible');
} else {
    console.log('Incompatible con LocalStorage');
}

// Guardar datos

localStorage.setItem('title', 'Curso de Symfony');

// Recuperar elemento

document.querySelector('#films').innerHTML = localStorage.getItem('title');

// Guardar objetos

let user = {
    name: 'Triz',
    email: 'triz@triz.com',
    web: 'triz.com'
};

localStorage.setItem('user', JSON.stringify(user));

// Recuperar objeto

let userJS = JSON.parse(localStorage.getItem('user'));

console.log(userJS);
document.querySelector('#data').append(`${userJS.web} - ${userJS.name}`);

// Borrar elemento

localStorage.removeItem('user');

// Borrar todo el local

localStorage.clear();