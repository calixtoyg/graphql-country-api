exports.getToken = (fastify, user) => {
  return fastify.jwt.sign(user.toObject(), {
    expiresIn: '1d',
  });
};
