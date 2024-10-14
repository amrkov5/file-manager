import path from 'path';
import fs from 'fs';
import process from 'process';
import isAbsolute from './isPathAbsolute.js';
import removeFile from './rm.js';
import GREEN_TEXT from './constants.js';

const moveFile = (pathArr) => {
  const isSourcePathAbsolute = isAbsolute(pathArr[0]);
  const sourcePath = isSourcePathAbsolute
    ? pathArr[0]
    : path.join(process.cwd(), pathArr[0]);

  const isDestPathAbsolute = isAbsolute(pathArr[1]);
  const destPath = isDestPathAbsolute
    ? pathArr[1]
    : path.join(process.cwd(), pathArr[1], path.parse(pathArr[0]).base);

  return new Promise((resolve, reject) => {
    try {
      const readStream = fs.createReadStream(sourcePath);
      const writeStream = fs.createWriteStream(destPath);

      readStream.pipe(writeStream);
      readStream.on('end', async () => {
        console.log(GREEN_TEXT, 'File moved successfully');
        await removeFile(sourcePath);
        resolve();
      });

      readStream.on('error', () => {
        reject();
      });

      writeStream.on('error', () => {
        reject();
      });
    } catch {
      reject();
    }
  });
};

export default moveFile;
