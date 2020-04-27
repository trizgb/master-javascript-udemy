'use strict';

// Timers

let time = setInterval(function() {
    console.log('Set interval ejecutado');

    document.querySelector('h1').style.fontSize = '50px';
}, 3000);

let stop = document.querySelector('#stop');

stop.addEventListener('click', function() {
    clearInterval(time);
})

