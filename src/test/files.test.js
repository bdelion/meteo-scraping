const fs = require('fs');
const os = require('os');
const path = require('path');
const { getCurrentDirectoryBase, directoryExists } = require('../lib/files');

const mockDirPath = path.join(os.tmpdir(), 'mocked-dir');

beforeAll(() => {
  // Create a temporary directory with root rights
  fs.mkdirSync(mockDirPath, { recursive: true, mode: 0o777 });
});

afterAll(() => {
  // Remove the temporary directory
  fs.rmdirSync(mockDirPath);
});

describe('getCurrentDirectoryBase', () => {
  test('should return the current directory name', () => {
    const currentDirName = path.basename(process.cwd());
    expect(getCurrentDirectoryBase()).toEqual(currentDirName);
  });
});

describe('directoryExists', () => {
  beforeEach(() => {
    // Mock the directory
    jest.mock('/root', () => mockDirPath);
  });

  afterEach(() => {
    // Reset the mock
    jest.resetModules();
  });

  test('should return true if directory exists', () => {
    expect(directoryExists('./')).toEqual(true);
  });

  test('should return false if directory does not exist', () => {
    expect(directoryExists('./non-existent-dir')).toEqual(false);
  });

  test('should throw error if access denied', () => {
    expect(() => {
      directoryExists('/root');
    }).toThrow();
  });
});
