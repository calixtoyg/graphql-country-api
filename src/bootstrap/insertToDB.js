const countryController = require('../controllers/countryController');
const userController = require('../controllers/userController');

async function insertUsers() {
  const usersPromises = [];
  usersPromises.push(
    userController.addUser({
      user: 'carlos',
      password: 'boca',
    }),
  );
  usersPromises.push(
    userController.addUser({
      user: 'john',
      password: 'doe',
    }),
  );
  return Promise.all(usersPromises);
}

async function insertCountries() {
  // const countries = JSON.parse(require('fs').readFileSync('./src/bootstrap/bootstrap.json').toString());
  // await countryController.addAllCountries(countries);
}

exports.insertData = async () => {
  const data = [];
  return await insertCountries();
  // data.push(insertUsers());
};
