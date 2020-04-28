let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: newColor => bicicleta.color = newColor
};

bicicleta.cambiaColor('Verde');