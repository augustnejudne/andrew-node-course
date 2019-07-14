const chalk = require('chalk');

const greenText = text => {
  return chalk.black.bgGreen(` ${text} `);
};

const redText = text => {
  return chalk.bgRed(` ${text} `);
};

const yellowText = text => {
  return chalk.black.bgYellow(` ${text} `);
};

module.exports = {
  greenText,
  redText,
  yellowText
};
