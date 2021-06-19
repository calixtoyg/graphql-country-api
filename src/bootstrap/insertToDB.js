const countryController = require('../controllers/countryController');
const userController = require('../controllers/userController');
const countries = require('./bootstrap');

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
  await countryController.addAllCountries(countries);
}

exports.insertData = async () => {
  const data = [];
  data.push(insertCountries());
  // data.push(insertUsers());
  await Promise.all(data);
};
