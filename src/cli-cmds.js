#!/usr/bin/env node

'use strict';

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const moment = require('moment');

const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Meteo Scraping', { horizontalLayout: 'full' }),
  ),
);

const args = yargs(hideBin(process.argv));

args.command ({
  command: '$0 interval',
  describe: 'Retourne la température min et max entre deux créneaux horaires.',
  example: 'meteo-scraping interval --after="04/03/2022 8:25" Température min et max entre le 04/03/2022 à 8h25 et maintenant.',
  example: 'meteo-scraping interval --after="04/03/2022 8:25" --before="5/3/22 08:28" Température min et max entre le 04/03/2022 à 8h25 et le 05/03/2022 à 8h28.',
  builder: {
    after: {
      alias : 'a',
      describe: 'Début de l\'intervalle de recherche.',
      type: 'string',
      demandOption: true
    },
    before: {
      alias : 'b',
      describe: 'Fin de l\'intervalle de recherche.',
      type: 'string'
    }
  },
  // Function for your command
  handler(argv) {
    console.log(chalk.inverse(`Intervalle demandé : ${args.after} --> ${args.before}`))
  }
})

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
  .wrap(yargs.terminalWidth())
  .locale('fr')
  .help('h')
  .showHelpOnFail(true)
  .alias('v', 'version')
  .alias('?', ['help', 'h'])
  .strict()
  .parse();
  