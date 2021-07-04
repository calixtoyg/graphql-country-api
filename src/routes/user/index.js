const userController = require('../../controllers/userController');
const {userCreationSchema} = require('../../schema/userCreationSchema');

module.exports = async function(fastify) {
  fastify.post('/', {schema: userCreationSchema}, async function(request) {
    console.log(`Add user: ${request.body}`);
    const {password, ...createdUserWithoutPassword} = await userController.addUser(request.body);
    return createdUserWithoutPassword;
  });
};
