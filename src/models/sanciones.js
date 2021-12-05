const mongoose = require('mongoose');
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const schemaSancion = new Schema({
    _id: ObjectId,
    id: {type: String},
    fechaCaptura: {type:Date},
    expediente: String,
    institucionDependencia: [{nombre: String}],
    servidorPublicoSancionado: [{rfc: {rfc: String, homoclave:String}, 
        curp: String, nombres: String, primerApellido: String, segundoApellido: String,
        genero: [{clave: String, valor:String}], puesto:String}],
    autoridadSancionadora: String,
    tipoFalta: [{clave:String, valor:String, descripcion:String}],
    tipoSancion: [{0:{clave:String, valor:String, descripcion:String}}],
    causaMotivoHechos: String,
    resolucion: {fechaResolucion: {type: Date}},
    observaciones: String,
    inhabilitacion: {plazo: String,fechaInicial: {type: Date}, fechaFinal: {type: Date}}
}, {collection: 'sanciones'});

const  sancionModel  = mongoose.model('sanciones', schemaSancion);

module.exports = sancionModel;