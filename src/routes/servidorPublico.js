const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;


const servidorModel = require('../models/servidores');
const sancionModel = require('../models/sanciones');
const declaracionModel = require('../models/declaraciones');

router.get('/lista', async(req,res) => {
  const servidores = await servidorModel.aggregate([{$group:{_id: "$id", id:{ $first: "$_id"}}}]);
  servidoresid = [];
  for(items in servidores){servidoresid.push(servidores[items].id);}
  const servidoresAll = await servidorModel.find({_id:servidoresid}).lean();
  res.render('../views/aplicacion/lista.hbs', {servidoresAll});
});

router.get('/servidor', (req,res) => {
    res.render('../views/aplicacion/consultarservidor.hbs');
});

router.post('/servidor/:curp1', async(req,res) => {
    //servidorModel.find({ curp: 'KIMT890421HSNNND01'}, function (err, docs) {
      //  if (err){
        //    console.log(err);
       // }
        //else{
          //  console.log("First function call : ", docs);
       // }
    //});
    //servidorModel.find({}, function(err, data) { console.log(err, data, data.length); });

    if(Object.keys(req.body).length === 0){
      var { curp1 }  = req.params;
    }else{
      var { curp1 } = req.body;
    }

    // Buscar por CURP y devolver valores con id unicos
    const servidores = await servidorModel.aggregate([{$match: {curp: curp1}},{$group:{_id: "$id", id:{ $first: "$_id"}}}]);
    
    // Poner todos los _id devueltos de la consulta anterior en un array
    servidoresid = [];
    for(items in servidores){servidoresid.push(servidores[items].id);}

    // Buscar los documentos a partir de _id devueltos
    const servidoresAll = await servidorModel.find({_id:servidoresid}).lean();

    const relacionados = await servidorModel.aggregate([{$match: {"superiorInmediato.curp": curp1}}, {$group:{_id: "$id", id:{ $first: "$_id"}}}]);
    relacionadosid = [];
    for(items in relacionados){relacionadosid.push(relacionados[items].id);}
    const relacionadosAll = await servidorModel.find({_id:relacionadosid}).lean();


    // Buscar sanciones
    const sanciones = await sancionModel.find({"servidorPublicoSancionado.curp": curp1}).lean();
    console.log(sanciones);

    const declaraciones = await declaracionModel.find({"declaracion.situacionPatrimonial.datosGenerales.curp": curp1}).sort({"metadata.actualizacion": 0}).lean();
    res.render('../views/aplicacion/servidores.hbs',{servidoresAll, relacionadosAll, sanciones, declaraciones});
});

module.exports = router;