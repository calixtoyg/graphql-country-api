const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  fastify.register(require('fastify-rate-limit'), {
    max: 30,
    timeWindow: '1 minute',
  });
});
