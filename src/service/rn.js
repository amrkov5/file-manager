import process from 'process';
import fs from 'fs';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';
import GREEN_TEXT from './constants.js';

const renameFile = (pathArr) => {
  const isSourcePathAbsolute = isAbsolute(pathArr[0]);
  let sourcePath = isSourcePathAbsolute
    ? pathArr[0]
    : path.join(process.cwd(), pathArr[0]);

  let destPath = path.join(process.cwd(), pathArr[1]);

  return new Promise((resolve, reject) => {
    fs.rename(sourcePath, destPath, (err) => {
      if (err) {
        reject();
      } else {
        console.log(GREEN_TEXT, 'File renamed successfully');
        resolve();
      }
    });
  });
};

export default renameFile;
