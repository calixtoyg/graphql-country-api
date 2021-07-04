'use strict';
const Country = require('../models/Country');

exports.getCountries = async () => {
  try {
    // const cars = await Car.find()
    const newVar = await Country.find();
    return newVar;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getCountryByName = async ({name}) => {
  try {
    return await Country.find({name: name});
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getCountriesByName = async ({name}) => {
  try {
    return await Country.find({name: {$regex: new RegExp(name, 'i')}});
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.addAllCountries = async (countries) => {
  try {
    return Country.create(countries);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.addCountry = async (args) => {
  try {
    const country = new Country(args);
    return await country.save();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.deleteCountry = async ({id}) => {
  try {
    return await Country.findByIdAndDelete(id);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.updateCountry = async (args) => {
  try {
    return await Country.findByIdAndUpdate(args.id, args);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
