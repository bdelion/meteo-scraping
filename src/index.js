#!/usr/bin/env node

const clear = require('clear');
// import clear from 'clear';
// const { chalk } = require('chalk');
const chalk = require('chalk');
// import chalk from 'chalk';
const figlet = require('figlet');
// import figlet from 'figlet';

const files = require('./lib/files');
// import { getCurrentDirectoryBase, directoryExists } from './lib/files.js';

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Meteo Scraping', { horizontalLayout: 'full' }),
  ),
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git repository!'));
  process.exit();
} else {
  console.log(chalk.red('Not a Git repository!'));
}
