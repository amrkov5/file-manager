import addFile from './add.js';
import catFile from './cat.js';
import listFiles from './ls.js';
import osOperations from './os.js';
import removeFile from './rm.js';

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
      console.log('rn invoked', inputArr);
      break;
    case 'cp':
      console.log('cp invoked', inputArr);
      break;
    case 'mv':
      console.log('mv invoked', inputArr);
      break;
    case 'rm':
      try {
        await removeFile(inputArr[1]);
      } catch {
        console.error('Operation failed');
      }
      break;
    case 'hash':
      console.log('hash invoked', inputArr);
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
