const mongoose = require('mongoose');
const currencySchema = new mongoose.Schema({
  code: {
    type: 'String',
  },
  name: {
    type: 'String',
  },
  symbol: {
    type: 'String',
  },
});

module.exports = mongoose.model('Currency', currencySchema);
