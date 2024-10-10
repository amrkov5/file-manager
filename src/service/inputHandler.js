import catFile from './cat.js';
import listFiles from './ls.js';
import osOperations from './os.js';

const inputHandler = async (inputArr) => {
  switch (inputArr[0]) {
    case 'os':
      osOperations(inputArr[1]);
    case 'cat':
      await catFile(inputArr[1]);
      break;
    case 'add':
      console.log('add invoked', inputArr);
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
      console.log('rm invoked', inputArr);
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
