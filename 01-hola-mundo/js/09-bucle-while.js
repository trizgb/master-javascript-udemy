'use strict';

// Bucle while
let year = 2020;

while (year <= 2051) {
    // ejecuta esto
    console.log('Estamos en el año: ' + year);

    year++;
}

while (year !== 1991) {
    // ejecuta esto
    console.log('Estamos en el año: ' + year);

    year--;
}

// Uso del break para parar el bucle
while (year !== 1991) {
    // ejecuta esto
    console.log('Estamos en el año: ' + year);

    if (year === 2000) {
        break;
    }
    
    year--;
}

// Bucle do while
let years = 30;

do {
    alert('Solo cuando sea diferente a 20');
    // years = 20;
    years--;
} while (years > 25)