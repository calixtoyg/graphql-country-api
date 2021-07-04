const graphql = require('graphql');
const countryController = require('../controllers/countryController');
const {toSEK} = require('../lib/currency');
const {isEmpty} = require('../lib/util');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = graphql;

const countryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    _id: {type: GraphQLID},
    id: {
      type: GraphQLID,
      async resolve(parent) {
        return parent._id;
      },
    },
    name: {type: GraphQLString},
    topLevelDomain: {type: new GraphQLList(GraphQLString)},
    alpha2Code: {type: GraphQLString},
    alpha3Code: {type: GraphQLString},
    callingCodes: {type: new GraphQLList(GraphQLString)},
    altSpellings: {type: new GraphQLList(GraphQLString)},
    capital: {type: GraphQLString},
    region: {type: GraphQLString},
    subregion: {type: GraphQLString},
    population: {type: GraphQLInt},
    currencies: {type: new GraphQLList(currencyType)},
    latlng: {type: new GraphQLList(GraphQLInt)},
    demonym: {type: GraphQLString},
    area: {type: GraphQLInt},
    gini: {type: GraphQLInt},
    timezones: {type: new GraphQLList(GraphQLString)},
    borders: {type: new GraphQLList(GraphQLString)},
    nativeName: {type: GraphQLString},
    numericCode: {type: GraphQLString},
    languages: {type: new GraphQLList(language)},
    translations: {type: new GraphQLList(translations)},
    flag: {type: GraphQLString},
    regionalBlocs: {type: new GraphQLList(regionalBloc)},
    cioc: {type: GraphQLString},
  }),
});

const translations = new GraphQLObjectType({
  name: 'Translation',
  fields: () => ({
    de: {type: GraphQLString},
    es: {type: GraphQLString},
    fr: {type: GraphQLString},
    ja: {type: GraphQLString},
    it: {type: GraphQLString},
    br: {type: GraphQLString},
    pt: {type: GraphQLString},
    nl: {type: GraphQLString},
    hr: {type: GraphQLString},
    fa: {type: GraphQLString},
  }),
});

const currencyType = new GraphQLObjectType({
  name: 'Currency',
  fields: () => ({
    code: {type: GraphQLString},
    name: {type: GraphQLString},
    symbol: {type: GraphQLString},
    SEKConversion: {
      type: GraphQLString,
      async resolve(parent) {
        return toSEK(parent.code);
      },
    },
  }),
});
const currencyTypeInput = new GraphQLInputObjectType({
  name: 'CurrencyInput',
  fields: () => ({
    code: {type: GraphQLString},
    name: {type: GraphQLString},
    symbol: {type: GraphQLString},
  }),
});

const language = new GraphQLObjectType({
  name: 'Language',
  fields: () => ({
    iso639_1: {type: GraphQLString},
    iso639_2: {type: GraphQLString},
    name: {type: GraphQLString},
    nativeName: {type: GraphQLString},
  }),
});

const regionalBloc = new GraphQLObjectType({
  name: 'RegionalBloc',
  fields: () => ({
    acronym: {type: GraphQLString},
    otherNames: {type: new GraphQLList(GraphQLString)},
    otherAcronyms: {type: new GraphQLList(GraphQLString)},
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    country: {
      type: countryType,
      args: {name: {type: GraphQLString}},
      async resolve(parent, args) {
        return await countryController.getCountryByName(args);
      },
    },
    countries: {
      type: new GraphQLList(countryType),
      args: {name: {type: GraphQLString}},
      async resolve(parent, args) {
        if (isEmpty(args)) return await countryController.getCountries();
        return await countryController.getCountriesByName(args);
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addCountry: {
      type: countryType,
      args: {
        name: {type: GraphQLString},
        currencies: {type: new GraphQLList(currencyTypeInput)},
        population: {type: GraphQLInt},
      },
      async resolve(parent, args) {
        const data = await countryController.addCountry(args);
        return data;
      },
    },
    editCountry: {
      type: countryType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLString},
        currencies: {type: new GraphQLList(currencyTypeInput)},
        population: {type: GraphQLInt},
      },
      async resolve(parent, args) {
        const data = await countryController.updateCountry(args);
        return data;
      },
    },
    deleteCountry: {
      type: countryType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
      async resolve(parent, args) {
        const data = await countryController.deleteCountry(args);
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
