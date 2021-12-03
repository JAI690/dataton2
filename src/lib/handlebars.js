const helpers = {};
const hb = require('handlebars');

const accounting = require("accounting");

  hb.registerHelper('accountingFormat', function (value) {
    return accounting.formatMoney(value);
  });

  module.exports = helpers;