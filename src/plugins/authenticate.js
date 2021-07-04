'use strict';
const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  fastify.decorate('authenticate', async function (request, reply) {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
  fastify.addHook('onRoute', (routeOptions) => {
    if (routeOptions.url === '/graphql') {
      routeOptions.preHandler = fastify.rateLimit();
      routeOptions.preValidation = [fastify.authenticate];
    }
  });
});
