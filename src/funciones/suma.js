function recorrer(objeto,propiedad){
    for (let i = 0; i < objeto.length; i++) {
        console.log(objeto[i][propiedad]);
    }
    
}

function convertir(objeto,propiedad){
    var variable = [];
    for (let i = 0; i < objeto.length; i++) {
        variable.push(objeto[i][propiedad]);
    }
    
    return variable;
}
module.exports = { recorrer, convertir };