const User = require('../models/User');
const {encrypt} = require('../lib/bcrypt');

exports.addUser = async (reqBody) => {
  try {
    const user = new User({...reqBody, password: await encrypt(reqBody.password)});
    return await user.save();
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.getUser = async (email) => {
  try {
    return await User.findOne({email});
  } catch (e) {
    console.error(e);
    throw e;
  }
};
