const axios = require('axios');

module.exports.toSEK = async (base) => {
  try {
    const exchangeInfo = (
      await axios.get('http://data.fixer.io/api/latest?access_key=6c2df4851203cca6bbbf9f0694f3e8bf')
    ).data;
    return (1 / exchangeInfo.rates[base]) * exchangeInfo.rates['SEK'];
  } catch (e) {
    console.error(e);
    return 'Exchange unavailable';
  }
};
