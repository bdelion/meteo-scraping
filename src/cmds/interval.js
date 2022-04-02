#!/usr/bin/env node

'use strict';

exports.usage = 'Retourne la températion min et max entre deux créneaux horaires.';
exports.command = 'interval --after [date-facter]';
exports.desc = 'Create an empty repo';
exports.builder = {
  dir: {
    default: '.'
  }
}
exports.handler = function (argv) {
  console.log('init called for dir', argv.dir)
}



// .usage('Retourne la températion min et max entre deux créneaux horaires.')
//   .example('meteo-scraping --after="04/03/2022 8:25"', 'Température min et max entre le 04/03/2022 à 8h25 et maintenant.')
//   .example('meteo-scraping --after="04/03/2022 8:25" --before="5/3/22 08:28"', 'Température min et max entre le 04/03/2022 à 8h25 et le 05/03/2022 à 8h28.')