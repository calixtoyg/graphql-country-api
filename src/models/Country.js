const mongoose = require('mongoose');
const Currency = require('../models/Currency').schema;
const Language = require('../models/Language').schema;
const Translation = require('../models/Translation').schema;
const RegionalBloc = require('../models/RegionalBloc').schema;

const countrySchema = new mongoose.Schema({
  name: {
    type: 'String',
    index: true,
    unique: true,
  },
  topLevelDomain: {
    type: ['String'],
  },
  alpha2Code: {
    type: 'String',
  },
  alpha3Code: {
    type: 'String',
  },
  callingCodes: {
    type: ['String'],
  },
  capital: {
    type: 'String',
  },
  altSpellings: {
    type: ['String'],
  },
  region: {
    type: 'String',
  },
  subregion: {
    type: 'String',
  },
  population: {
    type: 'Number',
  },
  latlng: {
    type: ['Number'],
  },
  demonym: {
    type: 'String',
  },
  area: {
    type: 'Number',
  },
  gini: {
    type: 'Number',
  },
  timezones: {
    type: ['String'],
  },
  borders: {
    type: ['String'],
  },
  nativeName: {
    type: 'String',
  },
  numericCode: {
    type: 'String',
  },
  currencies: [Currency],
  languages: [Language],
  translations: Translation,
  flag: {
    type: 'String',
  },
  regionalBlocs: [RegionalBloc],
  cioc: {
    type: 'String',
  },
});
module.exports = mongoose.model('Country', countrySchema);
