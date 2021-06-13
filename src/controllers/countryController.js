'use strict';
const axios = require('axios');
const Country = require('../models/Country');

exports.getCountries = async () => {
  try {
    // const cars = await Car.find()
    return (await axios.get('https://restcountries.eu/rest/v2/all')).data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getCountryByName = async ({ name }) => {
  try {
    // const cars = await Car.find()
    const data = (await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)).data;
    console.log(data[0]);
    return data[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.addAllCountries = async (countries) => {
  try {
    return await Country.create(countries);
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

exports.deleteCountry = async ({ id }) => {
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
