'use strict';

const chalk = require('chalk');

module.exports = (message, exit) => {
	console.error(chalk.inverse(message));
	exit && process.exit(1);
}
