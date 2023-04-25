const path = require('path');
const mockFs = require('mock-fs');

const { getCurrentDirectoryBase, directoryExists } = require('../lib/files');

describe('getCurrentDirectoryBase', () => {
  test('should return the current directory name', () => {
    const currentDirName = path.basename(process.cwd());
    expect(getCurrentDirectoryBase()).toEqual(currentDirName);
  });
});

describe('directoryExists', () => {
  beforeEach(() => {
    mockFs({
      '/data/src/lib': mockFs.directory({
        mode: '0755',
        items: {
          file1: 'file one content'
        }
      }),
      '/inaccessible': mockFs.directory({
        mode: '0000',
      }),
      'file': mockFs.file({
        content: 'file content here',
        ctime: new Date(1),
        mtime: new Date(1)
      })
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

  it('returns true for an existing directory', async () => {
    const exists = await directoryExists('./');
    expect(exists).toBe(true);
  });

  it('returns false for a non-existing directory', async () => {
    const exists = await directoryExists('./some/nonexistent/directory');
    expect(exists).toBe(false);
  });

  it('returns false for a non-existing directory recursively', async () => {
    const exists = await directoryExists('/data/src/lib/files/file1', true);
    expect(exists).toBe(false);
  });

  it('returns true for an existing directory recursively', async () => {
    const exists = await directoryExists('/data/src/lib/file1', true);
    expect(exists).toBe(true);
  });

  it('returns false for an existing directory not recursively', async () => {
    const exists = await directoryExists('/data/src/lib/file1', false);
    expect(exists).toBe(false);
  });

  it('throws an error for an invalid path', async () => {
    await expect(directoryExists(null)).rejects.toThrow('Le chemin doit être une chaîne de caractères valide.');
  });

  it('throws an error if access denied', async () => {
    await expect(directoryExists('/inaccessible/test.keystore')).rejects.toThrow('EACCES');
  });
});
