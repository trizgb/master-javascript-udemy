// Interface 

interface CamisetaBase {
    setColor(color);
    getColor();
}

// Decorador
function estampar(logo: string) {
    return function(target: Function) {
        target.prototype.estampacion = function():void {
            console.log(`Camiseta estampada con el logo de ${logo}`)
        }
    }
}

// Clase
@estampar('Gucci')
class Camiseta implements CamisetaBase {
    // Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    // Constructor
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    // Métodos
    public setColor(color) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }
}

let camiseta = new Camiseta('rojo', 'Manga larga', 'Nike', 'L', 14);
camiseta.setColor('Rojo');
camiseta.getColor();

// let playera = new Camiseta();
// playera.setColor('Azul');
// playera.getColor();

// console.log(camiseta.getColor(), playera);
console.log('Camiseta', camiseta);

// Clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean) {
        this.capucha = capucha;
    }

    getCapucha(): boolean {
        return this.capucha;
    }
}

let sudaderaNike = new Sudadera('Verde', 'Manga larga', 'Nike', 'M', 20);
sudaderaNike.setCapucha(true);
sudaderaNike.setColor('Negro');
console.log('Sudadera', sudaderaNike);
