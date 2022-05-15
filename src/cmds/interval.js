'use strict';

const chalk = require('chalk');
const moment = require('moment');

const files = require('../utils/files.js');
const error = require('../utils/error.js');
const getWeather = require('../utils/weather.js';

function checkCommandOptions (args) {
  let checkMessage = "";

  // Validation du format des données d'intervalle
  if (!args.after.match(/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4}) \d{1,2}\:\d{2}$/)) {
    checkMessage = "Le début de l'intervalle de recherche n'est pas correct. Respecter le format : jj/mm/aaaa hh:mm.";
  }
  if (!args.before.match(/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4}) \d{1,2}\:\d{2}$/)) {
    checkMessage = "La fin de l'intervalle de recherche n'est pas correcte.";
  }
  const after = moment(args.after, "DD/MM/YY hh:mm");
  const before = moment(args.before, "DD/MM/YY hh:mm");
  // L'intervalle doit être de 6 min minimum
  if ((before-after) < 360000) {
    checkMessage = "L'intervalle doit être supérieure ou égale à 6 minutes.";
  }
  // La date de début ne peut être supérieure à la date de fin
  if ((before-after) < 0) {
    checkMessage = "La fin de l'intervalle doit être supérieur au début.";
  }
  if (checkMessage != "") {
    error(checkMessage, true);
  }
}

exports.describe = 'Retourne la température min et max entre deux créneaux horaires.';
exports.command = 'interval';
exports.aliases = ['inter', 'int'];
exports.builder = {
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
};
exports.handler = function(args) {
  // Valeur par défaut de la fin d'intervalle au format 24h
  if (!args.before) {
    args.before=moment().format('DD/MM/YYYY HH:mm');
  }
  // Check command options
  checkCommandOptions(args);
  // Result
  if (files.directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
  } else {
    console.log(chalk.red('Not a Git repository!'));
  }
  const weather = getWeather("79430");
  console.log(chalk.inverse(`Intervalle demandé : ${args.after} --> ${args.before}`));
}