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
 * @param {boolean} recursive - Si vrai, vérifie récursivement les répertoires parents
 * @returns {Promise<boolean>} Une promesse qui résout en true si le répertoire existe, false sinon
 */
async function directoryExists(dirPath, recursive = false) {
  if (!dirPath || typeof dirPath !== 'string') {
    throw new Error('Le chemin doit être une chaîne de caractères valide.');
  }

  try {
    const stats = await fs.promises.stat(path.normalize(dirPath));
    if (stats.isDirectory()) {
      return true;
    } else if (!recursive) {
      return false;
    } else {
      const parentDir = path.dirname(dirPath);
      if (parentDir === dirPath) {
        return false;
      }
      return directoryExists(parentDir, true);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    } else if (err.code === 'EPERM' || err.code === 'EACCES') {
      throw new Error(err.code);
    } else {
      throw err;
    }
  }
}

module.exports = {
  getCurrentDirectoryBase,
  directoryExists
};
