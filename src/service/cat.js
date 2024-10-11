import fs from 'fs';
import process from 'process';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';

const catFile = async (pathToFile) => {
  const isPathAbsolute = isAbsolute(pathToFile);
  let destPath = isPathAbsolute
    ? pathToFile
    : path.join(process.cwd(), pathToFile);
  return new Promise((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(destPath);

      readStream.pipe(process.stdout);
      readStream.on('end', () => {
        process.stdout.write('\n');
        resolve();
      });
      readStream.on('error', () => {
        reject();
      });
    } catch (err) {
      reject(err);
    }
  });
};

export default catFile;
