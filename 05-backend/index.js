'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then((response) => {
        console.log('Conexión a la base de datos establecida con éxito');

        // Creación del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la url: localhost:3700')
        });
    })
    .catch((err) => {
        console.log(err)
    });