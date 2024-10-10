import fs from 'fs';
import process from 'process';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';

const catFile = async (pathToFile) => {
  const isPathAbsolute = isAbsolute(pathToFile.join(' '));
  let destPath = isPathAbsolute
    ? pathToFile.join(' ')
    : path.join(process.cwd(), pathToFile.join(' '));
  return new Promise((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(destPath);

      readStream.pipe(process.stdout);
      readStream.on('end', () => {
        process.stdout.write('\n');
        resolve();
      });
    } catch (err) {
      console.error('Operation failed');
      reject(err);
    }
  });
};

export default catFile;
