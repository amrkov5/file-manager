import process from 'process';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';

const changeDirectory = (pathToFolder) => {
  const isPathAbsolute = isAbsolute(pathToFolder.join(' '));
  try {
    if (isPathAbsolute) {
      process.chdir(pathToFolder.join(' '));
    } else {
      console.log(path.join(process.cwd(), pathToFolder.join(' ')));

      const destPath = path.join(process.cwd(), pathToFolder.join(' '));
      process.chdir(destPath);
    }
  } catch (err) {
    console.error('Operation failed');
  }
};

export default changeDirectory;
