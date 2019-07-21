const getWeather = require('./functions/getWeather.js');
const chalk = require('chalk');

const address = process.argv[2];

if (!address) {
  console.log(chalk.red.bgWhite(' Please provide an address '));
  process.exit(1);
}

getWeather(process.argv[2]);
