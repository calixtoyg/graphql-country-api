exports.userCreationSchema = {
  body: {
    type: 'object',
    required: ['email', 'user', 'password'],
    properties: {
      email: { type: 'string' },
      user: { type: 'string' },
      password: { type: 'string' },
    },
  },
};
