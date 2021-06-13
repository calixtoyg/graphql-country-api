const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encrypt = async (password) =>
  new Promise((resolve, reject) =>
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      }
      resolve(hash);
    }),
  );

exports.compare = async (password, hash) =>
  new Promise((resolve) => {
    bcrypt.compare(password, hash, function (err, result) {
      if (err || !result) {
        if (err) {
          console.error(err);
        }
        resolve(false);
      }

      resolve(result);
    });
  });
