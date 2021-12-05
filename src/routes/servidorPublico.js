const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;

var ObjectId = mongoose.Schema.Types.ObjectId;

const schemaServidor = new Schema({
    _id: ObjectId,
    id: {type: String},
    fechaCaptura: {type: Date},
    ejercicioFiscal: {type: Number},
    ramo: [{clave: Number, valor: {type: String}}],
    rfc: {type: String},
    curp: {type: String},
    nombres: {type: String},
    primerApellido: {type: String},
    segundoApellido: {type: String},
    genero: [{clave: String, valor:String}],
    institucionDependencia: [{nombre: String, clave:String, siglas:String}],
    puesto: {type: String},
    tipoArea: [[{clave:String, valor:String}],[{clave:String, valor:String}]],
    tipoProcedimiento: [[{clave:String,valor:String}],[{clave:String,valor:String}]],
    nivelResponsabilidad: [{clave:String,valor:String}],
    superiorInmediato: [{nombres:String, genero:{clave:String,valor:String}, primerApellido:String, segundoApellido:String, curp:String, rfc:String, puesto:{nombre:String,nivel:String}}]
}, {collection: 'servidores'});

const  servidorModel  = mongoose.model('servidor', schemaServidor);

router.get('/servidor', (req,res) => {
    res.render('../views/aplicacion/consultarservidor.hbs');
});

router.post('/servidor', async(req,res) => {
    //servidorModel.find({ curp: 'KIMT890421HSNNND01'}, function (err, docs) {
      //  if (err){
        //    console.log(err);
       // }
        //else{
          //  console.log("First function call : ", docs);
       // }
    //});
    //servidorModel.find({}, function(err, data) { console.log(err, data, data.length); });
    
    var {curp1} = req.body;
    // Buscar por CURP y devolver valores con id unicos
    const servidores = await servidorModel.aggregate([{$match: {curp: curp1}},{$group:{_id: "$id", id:{ $first: "$_id"}}}])
    
    // Poner todos los _id devueltos de la consulta anterior en un array
    servidoresid = [];
    for(items in servidores){servidoresid.push(servidores[items].id);}

    // Buscar los documentos a partir de _id devueltos
    const servidoresAll = await servidorModel.find({_id:servidoresid}).lean();

    console.log(servidoresAll);
    res.render('../views/aplicacion/servidores.hbs',{servidoresAll});
});

module.exports = router;