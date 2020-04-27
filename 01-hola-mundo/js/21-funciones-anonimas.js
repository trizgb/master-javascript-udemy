'use strict';

// Funciones anónimas

function sumame(a, b, sumaYMuestra, sumaPorDos) {
    let sumar = a + b;

    sumaYMuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function (dato) {
    console.log('La suma es: ' + dato)
},
    function (dato) {
        console.log('La suma por dos es: ' + (dato * 2))
    }
);

// Funciones flecha

sumame(5, 7, dato => {
    console.log('La suma es: ' + dato)
},
    dato => {
        console.log('La suma por dos es: ' + (dato * 2))
    }
);
