const mongoose = require('mongoose');
const translationSchema = new mongoose.Schema({
  de: {
    type: 'String',
  },
  es: {
    type: 'String',
  },
  fr: {
    type: 'String',
  },
  ja: {
    type: 'String',
  },
  it: {
    type: 'String',
  },
  br: {
    type: 'String',
  },
  pt: {
    type: 'String',
  },
  nl: {
    type: 'String',
  },
  hr: {
    type: 'String',
  },
  fa: {
    type: 'String',
  },
});

module.exports = mongoose.model('Translation', translationSchema);
