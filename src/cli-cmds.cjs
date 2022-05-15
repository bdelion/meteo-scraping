#!/usr/bin/env node

'use strict';

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const args = yargs(hideBin(process.argv));

const cmdInterval = require('./cmds/interval.js');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Meteo Scraping', { horizontalLayout: 'full' }),
  ),
);

// Commande "interval"
args.command(cmdInterval);
// Commande "bulk"
args.command ({
  command: 'bulk',
  describe: 'Retourne la température min et max entre les deux créneaux horaires d\'un fichier csv dans un fichier csv.',
  example: 'meteo-scraping bulk --file=input.csv',
  builder: {
    file: {
      alias : 'f',
      describe: 'Chemin du fichier des données en entrée.',
      type: 'string',
      demandOption: true
    }
  },
  // Function for your command
  handler(argv) {
    console.log(chalk.inverse(`Fichier en entrée : ${argv.file}`))
  }
})

args
  //.wrap(args.terminalWidth())
  .locale('fr')
  .demandCommand(1, chalk.inverse("Vous avez besoin d'au moins une commande."))
  .help('h')
  .showHelpOnFail(true)
  .alias('v', ['V', 'version'])
  .alias('?', ['help', 'h'])
  .strict()
  .parse();