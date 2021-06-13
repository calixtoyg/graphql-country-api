exports.countryNameSchema = {
  params: {
    required: ['name'],
    type: 'object',
    properties: {
      name: { type: 'string' },
    },
  },
};
