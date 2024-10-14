import path from 'path';
import fs from 'fs';
import process from 'process';
import { pipeline } from 'stream';
import zlib from 'zlib';
import isAbsolute from './isPathAbsolute.js';

const compressFile = async (pathArr) => {
  if (pathArr.length < 2) {
    console.error('Invalid input.');
    return;
  }
  const isSourcePathAbsolute = isAbsolute(pathArr[0]);
  const sourcePath = isSourcePathAbsolute
    ? pathArr[0]
    : path.join(process.cwd(), pathArr[0]);

  const isDestPathAbsolute = isAbsolute(pathArr[1]);
  let destPath = isDestPathAbsolute
    ? pathArr[1]
    : path.join(process.cwd(), pathArr[1]);

  return new Promise(async (resolve, reject) => {
    pipeline(
      fs.createReadStream(sourcePath),
      zlib.createBrotliCompress(),
      fs.createWriteStream(destPath),
      (err) => {
        if (err) {
          reject();
        } else {
          resolve();
        }
      }
    );
  });
};

export default compressFile;
