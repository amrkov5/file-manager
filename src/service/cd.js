import process from 'process';
import path from 'path';
import isAbsolute from './isPathAbsolute.js';

const changeDirectory = (pathToFolder) => {
  if (!pathToFolder) {
    console.error('Invalid input.');
    return;
  }
  try {
    const isPathAbsolute = isAbsolute(pathToFolder);
    if (isPathAbsolute) {
      process.chdir(pathToFolder);
    } else {
      const destPath = path.join(process.cwd(), pathToFolder);
      process.chdir(destPath);
    }
  } catch (err) {
    console.error('Operation failed');
  }
};

export default changeDirectory;
