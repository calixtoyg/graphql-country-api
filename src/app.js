'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');
const mongoose = require('mongoose');
const bootstrap = require('./bootstrap/insertToDB');

async function startMongoConnection() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(`mongodb://${process.env.MONGO_URL || 'localhost:27018'}/user`, { useNewUrlParser: true })
      .then(() => {
        console.log('MongoDB connected...');
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });

  process.on('unhandledRejection', (err) => {
    console.error(err);
    // process.exit(1);
  });

  await startMongoConnection();

  await bootstrap.insertData();

  // process.env.EXCHANGE_RATE = await exchangeRates('SEK')
  console.log('Aplication something is going on');
};
