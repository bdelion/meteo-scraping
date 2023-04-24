const moment = require('moment');
const { MIN_INTERVAL, dateNow, formatDate, validateDateFormat } = require('../lib/dates');

describe('dateNow', () => {
  test('returns a string formatted as DATE_FORMAT', () => {
    const now = moment();
    const expected = now.format('DD/MM/YYYY HH:mm');
    const result = dateNow();
    expect(result).toEqual(expected);
  });
});

describe('formatDate', () => {
  test('throws an error if the argument is not a string', () => {
    expect(() => formatDate(123)).toThrow('La date doit être une chaîne de caractères.');
  });

  test('returns a moment object with the same date as the argument', () => {
    const dateString = '01/01/2022 12:00';
    const expected = moment(dateString, 'DD/MM/YYYY HH:mm');
    const result = formatDate(dateString);
    expect(result).toEqual(expected);
  });
});

describe('validateDateFormat', () => {
  test('returns true for a string in DATE_FORMAT', () => {
    const dateString = '01/01/2022 12:00';
    const result = validateDateFormat(dateString);
    expect(result).toBe(true);
  });

  test('returns false for a string not in DATE_FORMAT', () => {
    const dateString = '01-01-2022 12:00';
    const result = validateDateFormat(dateString);
    expect(result).toBe(false);
  });

  test('returns false for a non-string argument', () => {
    const result = validateDateFormat(123);
    expect(result).toBe(false);
  });
});

describe('MIN_INTERVAL', () => {
  test('is a moment duration of 6 minutes', () => {
    const expected = moment.duration(6, 'minutes');
    expect(MIN_INTERVAL).toEqual(expected);
  });
});
