const {countryNameSchema} = require('../../schema/contryNameSchema');
const {getCountryByName} = require('../../controllers/countryController');
module.exports = async function(fastify) {
  fastify.get(
      '/:name',
      {
        preValidation: [fastify.authenticate],
        schema: countryNameSchema,
      },
      async (req, reply) => {
        const {name} = req.params;
        console.log(`Getting country by name: ${name}`);
        return reply.send(await getCountryByName({name}));
      },
  );
};
