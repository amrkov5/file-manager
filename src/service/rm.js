import fs from 'fs';
import path from 'path';
import process from 'process';
import isAbsolute from './isPathAbsolute.js';

const removeFile = async (pathToFile) => {
  const isPathAbsolute = isAbsolute(pathToFile);
  const destPath = isPathAbsolute
    ? pathToFile
    : path.join(process.cwd(), pathToFile);

  return new Promise((resolve, reject) => {
    fs.rm(destPath, (err) => {
      if (err) {
        reject();
      } else {
        console.log('\x1b[32m%s\x1b[0m', `File has been deleted successfully`);
        resolve();
      }
    });
  });
};

export default removeFile;
