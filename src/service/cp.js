import fs from 'fs';
import path from 'path';
import process from 'process';
import isAbsolute from './isPathAbsolute.js';
import GREEN_TEXT from './constants.js';

const copyFile = (pathArr) => {
  if (pathArr.length < 2) {
    console.error('Invalid input.');
    return;
  }
  const isSourcePathAbsolute = isAbsolute(pathArr[0]);
  const sourcePath = isSourcePathAbsolute
    ? pathArr[0]
    : path.join(process.cwd(), pathArr[0]);

  const isDestPathAbsolute = isAbsolute(pathArr[1]);
  const destPath = isDestPathAbsolute
    ? path.join(pathArr[1], path.parse(sourcePath).base)
    : path.join(process.cwd(), pathArr[1], path.parse(sourcePath).base);

  return new Promise((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(sourcePath);
      const writeStream = fs.createWriteStream(destPath);

      readStream.pipe(writeStream);
      readStream.on('end', () => {
        console.log(GREEN_TEXT, 'File copied successfully');
        resolve();
      });

      readStream.on('error', () => {
        reject();
      });

      writeStream.on('error', () => {
        reject();
      });
    } catch (err) {
      reject();
    }
  });
};

export default copyFile;
