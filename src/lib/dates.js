#!/usr/bin/env node

const moment = require('moment');

// Constantes
const DATE_FORMAT = 'DD/MM/YYYY HH:mm';
const MIN_INTERVAL = moment.duration(6, 'minutes');

/**
 * Renvoie la date et l'heure actuelles au format DATE_FORMAT
 * @returns {string} la date et l'heure actuelles au format DATE_FORMAT
 */
const dateNow = () => {
    return moment().format(DATE_FORMAT);
};

/**
 * Transforme une chaîne de caractères en objet moment
 * @param {string} dateString - la chaîne de caractères à transformer en objet moment
 * @returns {object} l'objet moment correspondant à la chaîne de caractères
 * @throws {Error} si la chaîne de caractères n'est pas au format DATE_FORMAT
 */
const formatDate = (dateString) => {
    if (typeof dateString !== 'string') {
        throw new Error('La date doit être une chaîne de caractères.');
    }
    return moment(dateString, DATE_FORMAT);
};

/**
 * Valide si une chaîne de caractères est au format DATE_FORMAT
 * @param {string} dateString - la chaîne de caractères à valider
 * @returns {boolean} true si la chaîne de caractères est au format DATE_FORMAT, sinon false
 */
const validateDateFormat = (dateString) => {
    if (typeof dateString !== 'string') {
        return false;
    }
    return moment(dateString, DATE_FORMAT, true).isValid();
};

module.exports = {
    MIN_INTERVAL,
    dateNow,
    formatDate,
    validateDateFormat
};
