const express = require('express');
const path = require('path');
const dato2 = require('../public/Data/Sistema3Servidores.json');


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

router.get('/sanciones/', (req,res) => {

    res.render("../views/dashboard/sanciones.hbs", {dato2});
});

router.get('/declaraciones/', (req,res) => {
    const dato2 = require('../public/Data/declaraciones.json');
    res.render("../views/dashboard/declaraciones.hbs", {dato3});
});

router.get('/servidores/', (req,res) => {
    //var data = fs.readFileSync('Data/SistemaS2.json', 'utf8');
    //var dato = JSON.parse(data);
    const dato = require('../public/Data/SistemaS2.json');
    res.render("../views/dashboard/servidores.hbs", {dato});
});

module.exports = router;