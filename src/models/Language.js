const mongoose = require('mongoose');
const languageSchema = new mongoose.Schema({
  iso639_1: {
    type: 'String',
  },
  iso639_2: {
    type: 'String',
  },
  name: {
    type: 'String',
  },
  nativeName: {
    type: 'String',
  },
});

module.exports = mongoose.model('Language', languageSchema);
