const helpers = {};
const moment = require('moment');
const hb = require('handlebars');

const accounting = require("accounting");

hb.registerHelper('status', function (value) {
    if(value === '1'){
        return true;
    }else{
        return false;
    }
    
  });
  
hb.registerHelper('dateFormat', function (date, options) {
      const formatToUse = (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "DD/MM/YYYY"
      return moment(date).format(formatToUse);
  });


  hb.registerHelper('accountingFormat', function (value) {
    return accounting.formatMoney(value);
  });
    
    

module.exports = helpers;