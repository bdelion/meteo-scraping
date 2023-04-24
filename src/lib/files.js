#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Renvoie le nom du répertoire courant
 * @returns {string} Le nom du répertoire courant
 */
function getCurrentDirectoryBase() {
  return path.basename(process.cwd());
}

/**
 * Vérifie si un répertoire existe à l'emplacement spécifié
 * @param {string} dirPath - Le chemin du répertoire à vérifier
 * @returns {boolean} True si le répertoire existe, false sinon
 */
function directoryExists(dirPath) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    } else {
      throw err;
    }
  }
}

module.exports = {
  getCurrentDirectoryBase,
  directoryExists
};
