'use strict';
const schema = require('../schema/graphQLSchemas');
const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  fastify.register(require('mercurius'), {
    schema,
    graphiql: true,
  });
});
