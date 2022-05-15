'use strict';

const fs = require('fs');
const path = require('path');

function getCurrentDirectoryBase() {
  return path.basename(process.cwd());
}

function directoryExists(filePath) {
  return fs.existsSync(filePath);
}

module.exports = {
  getCurrentDirectoryBase,
  directoryExists
};
