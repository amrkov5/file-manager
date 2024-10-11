import fs from 'fs';
import process from 'process';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';
import GREEN_TEXT from './constants.js';

const addFile = async (pathToFile) => {
  const isPathAbsolute = isAbsolute(pathToFile);
  let destPath = isPathAbsolute
    ? pathToFile
    : path.join(process.cwd(), pathToFile);
  return new Promise((resolve, reject) => {
    try {
      fs.stat(destPath, (err) => {
        if (!err) {
          console.error('File already exists.');
          reject();
        } else {
          fs.writeFile(destPath, '', (err) => {
            if (err) {
              reject();
            } else {
              resolve();
              console.log(GREEN_TEXT, 'File created successfully');
            }
          });
        }
      });
    } catch {
      reject();
    }
  });
};

export default addFile;
