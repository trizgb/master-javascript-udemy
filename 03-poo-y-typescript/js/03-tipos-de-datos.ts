// string
let cadena: string = 'holi';

// number
let numero: number = 1;

// boolean
let booleano: boolean = true;

// Any - sin tipado fuerte
let cualquiera: any = 'hola';
cualquiera = 20;

// Array
let lenguajes: Array<string> = ['Javascript', 'Python'];
let años: number[] = [12, 14, 16];

// Multiples tipos de datos
let cadenaONumero: string | number = 'hola';

// Tipos de datos personalizados
type alfanumerico = string | number;

let personalizado: alfanumerico = 'qué tal';

console.log(cadena, numero, booleano, cualquiera, lenguajes, años, cadenaONumero, personalizado);