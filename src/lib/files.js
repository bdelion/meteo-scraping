#!/usr/bin/env node

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
