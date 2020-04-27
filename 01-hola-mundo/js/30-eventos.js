 'use strict';

// Eventos del ratón

let button = document.querySelector('#btn');
let input = document.querySelector('#name-field');

function changeColor() {
    let bg = button.style.background
    if (bg === 'green') {
        this.style.background = 'red';
    } else {
        button.style.background = 'green';
    }

    return true;
}

// Click
button.addEventListener('click', changeColor);

// Mouseover
button.addEventListener('mouseover', function () {
    button.style.background = '#ccc';
})

// Mouseout
button.addEventListener('mouseout', function () {
    button.style.background = 'none';
})

// Focus
input.addEventListener('focus', function () {
    console.log('Estás dentro del input');
});

// Blur
input.addEventListener('blur', function () {
    console.log('Estás fuera del input');
});

// Keydown
input.addEventListener('keydown', function () {
    console.log('Estás pulsando esta tecla', String.fromCharCode(event.keyCode));
});

// Keypress
input.addEventListener('keypress', function () {
    console.log('Tecla presionada', String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener('keyup', function () {
    console.log('Tecla soltada', String.fromCharCode(event.keyCode));
});


// Evento load
window.addEventListener('load', () => {
    // Meter todo el código anterior si la etiqueta script está cargado en el head
})