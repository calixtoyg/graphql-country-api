const mongoose = require('mongoose');
const regionalBlocSchema = new mongoose.Schema({
  acronym: {
    type: 'String',
  },
  name: {
    type: 'String',
  },
  otherAcronyms: {
    type: 'Array',
  },
  otherNames: {
    type: 'Array',
  },
});

module.exports = mongoose.model('RegionalBloc', regionalBlocSchema);
