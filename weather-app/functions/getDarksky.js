const request = require('request');
const readline = require('./utils/readline.js');

const getDarksky = (address, callback) => {
  const darksky_accessToken = 'a1abd6d2c4c77d88dffa69c7a0825a37';
  const darksky_URL = `https://api.darksky.net/forecast/${darksky_accessToken}/${address.longitude},${address.latitude}?units=si`;

  request({ url: darksky_URL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
      readline.close();
      return;
    }
    if (response.body.error) {
      callback('Unable to locate address. Try another search.', undefined);
      readline.close();
      return;
    }
    callback(undefined, {
      summary: response.body.daily.data[0].summary,
      temperature: response.body.currently.temperature,
      precipProbability: response.body.currently.precipProbability,
      location: address.location,
    });
    return;
  });
};

module.exports = getDarksky;