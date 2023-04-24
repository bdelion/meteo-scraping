const path = require('path');
const { getCurrentDirectoryBase, directoryExists } = require('../lib/files');

describe('getCurrentDirectoryBase', () => {
  test('should return the current directory name', () => {
    const currentDirName = path.basename(process.cwd());
    expect(getCurrentDirectoryBase()).toEqual(currentDirName);
  });
});

describe('directoryExists', () => {
  test('should return true if directory exists', () => {
    expect(directoryExists('./')).toEqual(true);
  });

  test('should return false if directory does not exist', () => {
    expect(directoryExists('./non-existent-dir')).toEqual(false);
  });

/* TODEL   test('should throw error if access denied', () => {
    expect(() => {
      directoryExists('/root');
    }).toThrow();
  }); */
});
