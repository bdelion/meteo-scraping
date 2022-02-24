#!/usr/bin/env node

const fs = require('fs');
// import fs from 'fs';
const path = require('path');
// import path from 'path';

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
