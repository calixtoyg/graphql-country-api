const fastifyCors = require('fastify-cors');
const fp = require('fastify-plugin');

module.exports = fp(async function (fastify) {
  fastify.register(fastifyCors, { origin: true });
});
