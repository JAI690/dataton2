const express = require('express');
const path = require('path');
const { dato2 } = require('../public/Data/Sistema3Servidores.json');
const { readFile } = require('fs/promises');


const router = express.Router();

const { convertir,recorrer } = require('../funciones/suma');

var fs=require('fs');

router.get('/', (req,res) => {

    //const datos1 = convertir(dato,'id');

    //console.log(datos);
    res.render("../views/principal.hbs");
});

router.get('/estructura/', (req,res) => {
    res.render("../views/dashboard/datos.hbs");
});

router.get('/sanciones/', async(req,res) => {

    const file = await readFile('./src/public/Data/Sistema3Servidores.json', 'utf-8')
    const data = JSON.parse(file);

    res.render("../views/dashboard/sanciones.hbs", { data });
});

router.get('/declaraciones/', async(req,res) => {

    const file = await readFile('./src/public/Data/declaraciones.json', 'utf-8')
    const dato3 = JSON.parse(file);
    res.render("../views/dashboard/declaraciones.hbs", {dato3});
});

router.get('/servidores/', async(req,res) => {
    //const file = await readFile('./src/public/Data/SistemaS2.json', 'utf-8')
    //const dato = JSON.parse(file);
    const dato = [];
    res.render("../views/dashboard/servidores.hbs", {dato});
});

module.exports = router;