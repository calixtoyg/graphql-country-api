const axios = require('axios');

module.exports.toSEK = async (base) => {
  try {
    const exchangeInfo = (
      await axios.get('http://data.fixer.io/api/latest?access_key=65a46a3c3c9c4a87ab07b6a72500b80d')
    ).data;
    // 0.00868089465300294 1/exchangeInfo.rates['ARS']
    return (1 / exchangeInfo.rates[base]) * exchangeInfo.rates['SEK'];
  } catch (e) {
    console.error(e);
    return 'Exchange unavailable';
  }
};

module.exports.exchangeRates = async (rateTo) => {
  const exchangeInfo = (await axios.get('http://data.fixer.io/api/latest?access_key=65a46a3c3c9c4a87ab07b6a72500b80d'))
    .data;
  return exchangeInfo.rates[rateTo];
};
