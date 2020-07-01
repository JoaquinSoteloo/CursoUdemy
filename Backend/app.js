'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var BodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar rutas de ficheros
var articles_routes = require('./routes/article');

// Cargar Middlewares
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadir prefijos a rutas o cargar rutas
app.use('/api',articles_routes);

//Expotar modulo (fichero actual)
module.exports = app;