import path from 'path';
import crypto from 'crypto';
import fs from 'fs';
import process from 'process';
import isAbsolute from './isPathAbsolute.js';

const createHash = (pathToFile) => {
  const isPathAbsolute = isAbsolute(pathToFile);
  const destPath = isPathAbsolute
    ? pathToFile
    : path.join(process.cwd(), pathToFile);

  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(destPath);

    input.pipe(hash).on('finish', () => {
      const result = hash.digest('hex');
      console.log(result);
      input.close();
      resolve();
    });
    input.on('error', () => {
      reject();
    });
  });
};

export default createHash;
