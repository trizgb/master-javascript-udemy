'use strict';

let age = 39;
let print = '';

//Switch
switch (age) {
    case 18:
        print = 'Acabas de cumplir la mayoría de edad';
        break;
    case 25:
        print = 'Ya eres un adulto';
        break;
    case 40:
        print = 'Crisis de los 40';
        break;
    case 75:
        print = 'Eres ya un anciano';
        break;
    default:
        print = 'Tu edad es neutra';
        break;
}

console.log(print);