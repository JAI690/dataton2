const express = require('express');

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
    var data2 = fs.readFileSync('../public/Data/Sistema3Servidores.json', 'utf8');
    var dato2 = JSON.parse(data2);
    res.render("../views/dashboard/sanciones.hbs", {dato2});
});

router.get('/declaraciones/', (req,res) => {
    var data3 = fs.readFileSync('../public/Data/declaraciones.json', 'utf8');
    var dato3 = JSON.parse(data3);
    res.render("../views/dashboard/declaraciones.hbs", {dato3});
});

router.get('/servidores/', (req,res) => {
    var data = fs.readFileSync('../public/Data/SistemaS2.json', 'utf8');
    var dato = JSON.parse(data);
    console.log(dato[0]);
    res.render("../views/dashboard/servidores.hbs", {dato});
});

module.exports = router;