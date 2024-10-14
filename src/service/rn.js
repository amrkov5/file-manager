import process from 'process';
import fs from 'fs';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';
import GREEN_TEXT from './constants.js';

const renameFile = (pathArr) => {
  if (pathArr.length < 2) {
    console.error('Invalid input.');
    return;
  }
  const isSourcePathAbsolute = isAbsolute(pathArr[0]);
  const sourcePath = isSourcePathAbsolute
    ? pathArr[0]
    : path.join(process.cwd(), pathArr[0]);

  const destPath = path.join(path.parse(sourcePath).dir, pathArr[1]);

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
