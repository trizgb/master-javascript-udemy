// import { Camiseta } from './05-clases';

class Main {
    constructor() {
        console.log('Aplicación JS cargada!!');
    }

    getCamiseta() {
        return new Camiseta('rojo', 'Manga larga', 'Nike', 'L', 14);
    }
}

let main = new Main();