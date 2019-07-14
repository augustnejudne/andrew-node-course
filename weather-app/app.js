const getWeather = require('./functions/getWeather.js');
const readline = require('./functions/utils/readline.js');

readline.question('Give me an address: ', choice => {
  getWeather(choice);
});
