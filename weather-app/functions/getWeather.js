const getGeoCode = require('./utils/getGeoCode.js');
const getDarksky = require('./utils/getDarksky.js');

const getWeather = address => {
  getGeoCode(address, (error, data) => {
    if (error) {
      console.log('error', error);
      return;
    }
    getDarksky(data, (error, data) => {
      if (error) {
        console.log('error', error);
      }
      const { summary, temperature, precipProbability, location } = data;
      console.log(`${summary} It is ${temperature} degress celsius in ${location} with ${precipProbability * 100}% chance of rain.`);
    });
  });
};

module.exports = getWeather;