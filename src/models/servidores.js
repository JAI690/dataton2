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

module.exports = servidorModel;
