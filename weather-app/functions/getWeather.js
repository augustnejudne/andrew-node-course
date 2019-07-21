const chalk = require('chalk');
const getGeoCode = require('./getGeoCode.js');
const getDarksky = require('./getDarksky.js');

const getWeather = address => {
  // 1. call the geoCode function
  getGeoCode(address, (error, geoCodeData) => {
    // 2. check if there's error
    if (error) {
      console.log(chalk.red.bgWhite(` ERROR: ${error} `));
      return;
    }
    // 3. kung walang error, call the darksky function with the geoCode data as first parameter
    getDarksky(geoCodeData, (error, { summary, temperature, precipProbability, location }) => {
      // 4. check if may error
      if (error) {
        console.log(chalk.red.bgWhite(` ERROR: ${error} `));
      }
      // 5. if walang error, display the returned data to user.
      console.log(chalk.yellow(`\n ${summary} It is ${temperature} degress celsius in ${location} with ${precipProbability * 100}% chance of rain. \n`));
    });
  });
};

module.exports = getWeather;