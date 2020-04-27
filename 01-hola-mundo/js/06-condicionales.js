'use strict';

/*
// Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menos o igual: <=
    Igual: ===
    Diferente: !==
*/

/*
// Operadores lógicos
    AND(Y): &&
    OR(O): ||
    NEGACIÓN: !
*/

// Condicional if
let age = 19;
let name = 'Beatriz';

if (age >= 18) {
    console.log(name + ' ' + age + ' años, es MAYOR de edad');

    if (age <= 33) {
        console.log('Todavía eres millenial');
    } else if (age >= 70) {
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres millenial');
    }

} else {
    console.log(name + ' ' + age + ' años, es MENOR de edad');
}

// Negación
let year = 2030;

if (year !== 2016) {
    console.log('El año no es 2016, realmente es: ' + year);
}

//AND
if (year >= 2000 && year <= 2022 && year !== 2020) {
    console.log('Estamos en la era actual');
} else {
    console.log('Estamos en la era postmoderna');
}

//OR

if (year === 2010 || (year >= 2020 && year === 2030)) {
    console.log('El año acaba en 0');
} else {
    console.log('Año no registrado');
}