'use strict';

let formulario = document.querySelector('#formpeliculas');

formulario.addEventListener('submit', function () {
    let titulo = document.querySelector('#addpelicula').value;

    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});

let ul = document.querySelector('#peliculas-list');

for (let i in localStorage) {
    if (typeof localStorage[i] === 'string') {
        let li = document.createElement('li');

        li.append(localStorage[i]);
        ul.append(li);
    }
}


let formulariob = document.querySelector('#formBorrarPeliculas');

formulariob.addEventListener('submit', function () {
    let titulo = document.querySelector('#borrarPelicula').value;

    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});
