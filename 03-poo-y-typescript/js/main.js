// import { Camiseta } from './05-clases';
var Main = /** @class */ (function () {
    function Main() {
        console.log('Aplicación JS cargada!!');
    }
    Main.prototype.getCamiseta = function () {
        return new Camiseta('rojo', 'Manga larga', 'Nike', 'L', 14);
    };
    return Main;
}());
var main = new Main();
