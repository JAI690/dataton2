const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const schemaDeclaracion = new Schema({
    _id: ObjectId,
    id: {type: String},
    declaracion: {situacionPatrimonial: {datosGenerales: {curp:String}}},
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
}, {collection: 'declaraciones'});


const declaracionModel  = mongoose.model('sancion', schemaDeclaracion);

module.exports = declaracionModel;
