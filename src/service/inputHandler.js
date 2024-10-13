import addFile from './add.js';
import catFile from './cat.js';
import copyFile from './cp.js';
import createHash from './hash.js';
import listFiles from './ls.js';
import moveFile from './mv.js';
import osOperations from './os.js';
import removeFile from './rm.js';
import renameFile from './rn.js';

const inputHandler = async (inputArr) => {
  switch (inputArr[0]) {
    case 'os':
      osOperations(inputArr[1]);
    case 'cat':
      try {
        await catFile(inputArr[1]);
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'add':
      try {
        await addFile(inputArr[1]);
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'rn':
      try {
        await renameFile(inputArr.slice(1));
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'cp':
      try {
        await copyFile(inputArr.slice(1));
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'mv':
      try {
        await moveFile(inputArr.slice(1));
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'rm':
      try {
        await removeFile(inputArr[1]);
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'hash':
      try {
        await createHash(inputArr[1]);
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'compress':
      console.log('compress invoked', inputArr);
      break;
    case 'decompress':
      console.log('decompress invoked', inputArr);
      break;
    case 'ls':
      if (inputArr.length > 1) {
        console.error('Invalid input');
      } else {
        await listFiles();
      }
      break;
    default:
      console.error('Invalid input');
  }
};

export default inputHandler;
