const express = require('express');
const path = require('path');
const { readFile } = require('fs/promises');


const router = express.Router();

const { convertir,recorrer } = require('../funciones/suma');

var fs=require('fs');

router.get('/', (req,res) => {

    //const datos1 = convertir(dato,'id');

    //console.log(datos);
    res.render("../views/aplicacion/consultarservidor.hbs");
});

router.get('/estructura/', (req,res) => {
    res.render("../views/dashboard/datos.hbs");
});

router.get('/sanciones/', async(req,res) => {

    const {...data} = require('../public/Data/Sistema3Servidores.json');
    res.render("../views/dashboard/sanciones.hbs", { data });
});

router.get('/declaraciones/', async(req,res) => {

    const file1 = await readFile('./src/public/Data/ejemplo.json', 'latin1');
    const prueba = '[{"prueba":2},{"prueba":3}]';
    console.log(prueba);
    const prueba2 = JSON.parse(prueba);
    console.log(prueba2)
    const file = JSON.parse(file1);
    //console.log(file);
    //const dato3 = require('../public/Data/declaraciones.json');
    //res.render("../views/dashboard/declaraciones.hbs", {dato3});
    res.send(file);
});

router.get('/servidores/', async(req,res) => {
    
    const dato = require('../public/Data/SistemaS2.json');
    res.render("../views/dashboard/servidores.hbs", {dato});
});

module.exports = router;

