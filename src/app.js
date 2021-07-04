'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');
const mongoose = require('mongoose');
const bootstrap = require('./bootstrap/insertToDB');

async function startMongoConnection() {
  return new Promise((resolve, reject) => {
    mongoose
        .connect(`mongodb://${process.env.MONGO_URL || 'localhost:27017'}/user`, {useNewUrlParser: true})
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

module.exports = async function(fastify, opts) {
  // TODO testear un poco en react.
  fastify.register(require('fastify-rate-limit'), {
    max: 50,
    timeWindow: '1 minute',
  });

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

  if (process.env.BOOTSTRAP_DATA) {
    await bootstrap.insertData();
  }
};
