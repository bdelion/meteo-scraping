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


// TODO https://www.demo2s.com/node.js/node-js-yargs-commanddir-option-string-object-member.html


const args = yargs(hideBin(process.argv))
.demand(1)
.commandDir('cmds', {
  visit(command) {
    if (
      command.command.startsWith('bump') &&
      !(buildPack instanceof NodejsBuildPack)
    ) {
      return false;
    }
    return command;
  },
})
.options({
  'build-pack': {
    alias: 'b',
    description: `${'Choices:'.bold} ${buildPacks.packs
      .map(pack => pack.name.yellow)
      .concat('default'.yellow)
      .join(', ')}. ${
      buildPack._selected ? 'Selected:'.bold : 'Detected:'.bold
    } ${
      `${buildPack._name}`.green
    }. The build pack to use. The tool will attempt to detect which build to use.`,
    global: true,
    requiresArg: true,
    type: 'string',
  },
  'local-path': {
    alias: 'l',
    description: `${'Current:'.bold} ${
      `${buildPack.config.global.localPath}`.yellow
    }. Use this option to set the current working directory of the command.`,
    global: true,
    requiresArg: true,
    type: 'string',
  },
  'dry-run': {
    description: `${'Default:'.bold} ${
      `${buildPack.config.global.dryRun}`.yellow
    }. Print the actions that ${
      'would'.italic
    } be taken, but don't actually do anything.`,
    global: true,
    type: 'boolean',
  },
  silent: {
    description: `${'Default:'.bold} ${
      'false'.yellow
    }. If true, hide the output of shell commands.`,
    global: true,
    type: 'boolean',
  },
})
.wrap(120)
.recommendCommands()
.epilogue(
  'For more information, see https://github.com/GoogleCloudPlatform/nodejs-repo-tools'
)
.help()
.strict()
  .demandCommand()
  .wrap(yargs.terminalWidth())
  .locale('fr')
  .help('h')
  .showHelpOnFail(true)
  .alias('v', 'version')
  .alias('?', ['help', 'h'])
  .strict()
  .parse();
