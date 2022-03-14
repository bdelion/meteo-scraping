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

const args = yargs(hideBin(process.argv))
  .usage('Retourne la températion min et max entre deux créneaux horaires.')
  .example('meteo-scraping --after="04/03/2022 8:25"', 'Température min et max entre le 04/03/2022 à 8h25 et maintenant.')
  .example('meteo-scraping --after="04/03/2022 8:25" --before="5/3/22 08:28"', 'Température min et max entre le 04/03/2022 à 8h25 et le 05/03/2022 à 8h28.')
  .options({
    'after' : {
      alias : 'a',
      describe: 'Début de l\'intervalle de recherche.',
      type: 'string',
      demandOption: true
    },
    'before' : {
      alias : 'b',
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
    // Valeur par défaut de la fin d'intervalle au format 24h
    if (!yargs.before) {
      yargs.before=moment().format('DD/MM/YYYY HH:mm');
    }
    // Validation du format des données d'intervalle
    if (!yargs.after.match(/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4}) \d{1,2}\:\d{2}$/)) {
      throw new Error("Le début de l'intervalle de recherche n'est pas correct.");
    }
    if (!yargs.before.match(/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4}) \d{1,2}\:\d{2}$/)) {
      throw new Error("La fin de l'intervalle de recherche n'est pas correcte.");
    }
    const after = moment(yargs.after, "DD/MM/YY hh:mm");
    const before = moment(yargs.before, "DD/MM/YY hh:mm");
    // La date de début ne peut être supérieure à la date de fin
    if ((before-after) < 0) {
      throw new Error("La fin de l'intervalle doit être supérieur au début.");
    }
    // L'intervalle doit être de 6 min minimum
    if ((before-after) < 360000) {
      throw new Error("L'intervalle doit être supérieure ou égale à 6 minutes.");
    }
    return true; // tell Yargs that the arguments passed the check
  })
  .strict()
  .parse();

console.log(chalk.inverse(`Intervalle demandé : ${args.after} --> ${args.before}`));
