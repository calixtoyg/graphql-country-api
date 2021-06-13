const userController = require('../../controllers/userController');
const { getToken } = require('../../lib/jwt');
const { loginSchema } = require('../../schema/loginSchema');
const { compare } = require('../../lib/bcrypt');

module.exports = async function (fastify) {
  fastify.post('/', { schema: loginSchema }, async function (request, reply) {
    request.log.info(`Authenticating user: ${request.body.email}`);
    const user = await userController.getUser(request.body.email);
    if (user && (await compare(request.body.password, user.password))) {
      const token = getToken(fastify, user);
      return reply.send({ token });
    }
    reply.code(401).send({ message: 'Invalid password or email' });
  });
};
