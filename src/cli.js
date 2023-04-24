#!/usr/bin/env node

'use strict';

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const moment = require('moment');

// const files = require('./lib/files');
const dates = require('./lib/dates');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Meteo Scraping', { horizontalLayout: 'full' }),
  ),
);

// Message d'erreur
const ERROR_INVALID_INTERVAL_START = `Le début de l'intervalle de recherche n'est pas correct.`;
const ERROR_INVALID_INTERVAL_END = `La fin de l'intervalle de recherche n'est pas correcte.`;
const ERROR_INTERVAL_END_BEFORE_START = `La fin de l'intervalle doit être supérieur au début.`;
const ERROR_INTERVAL_TOO_SHORT = `L'intervalle doit être supérieure ou égale à 6 minutes.`;

const args = yargs(hideBin(process.argv))
  .usage('Retourne la températion min et max entre deux créneaux horaires.')
  .example('meteo-scraping --after="04/03/2022 8:25"', 'Température min et max entre le 04/03/2022 à 8h25 et maintenant.')
  .example('meteo-scraping --after="04/03/2022 8:25" --before="5/3/22 08:28"', 'Température min et max entre le 04/03/2022 à 8h25 et le 05/03/2022 à 8h28.')
  .options({
    'after': {
      alias: 'a',
      describe: 'Début de l\'intervalle de recherche.',
      type: 'string',
      demandOption: true
    },
    'before': {
      alias: 'b',
      describe: 'Fin de l\'intervalle de recherche.',
      type: 'string'
    }
  })
  .wrap(yargs.terminalWidth())
  .locale('fr')
  .help('h')
  .showHelpOnFail(true)
  .alias('v', 'version')
  .alias('?', ['help', 'h'])
  .check((yargs, options) => {
    // Validation du format de la date de début
    if(!dates.validateDateFormat(yargs.after)) {
      throw new Error(ERROR_INVALID_INTERVAL_START);
    };
    // Valeur par défaut de la fin d'intervalle au format 24h
    if (!yargs.before) {
      yargs.before = dates.dateNow();
    }
    // Validation du format de la date de fin
    if(!dates.validateDateFormat(yargs.before)) {
      throw new Error(ERROR_INVALID_INTERVAL_END);
    };
    const after = dates.formatDate(yargs.after);
    const before = dates.formatDate(yargs.before);
    // La date de début ne peut être supérieure à la date de fin
    if (before.isBefore(after)) {
      throw new Error(ERROR_INTERVAL_END_BEFORE_START);
    }
    // L'intervalle doit être de 6 min minimum
    if (before.diff(after) < dates.MIN_INTERVAL.asMilliseconds()) {
      throw new Error(ERROR_INTERVAL_TOO_SHORT);
    }
    return true; // tell Yargs that the arguments passed the check
  })
  .strict()
  .parse();

console.log(chalk.inverse(`Intervalle demandé : ${args.after} --> ${args.before}`));
