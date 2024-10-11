import process from 'process';
import readline from 'readline';
import os from 'os';
import inputHandler from './service/inputHandler.js';
import changeDirectory from './service/cd.js';
import handlePath from './service/handlePath.js';

const startManager = () => {
  const userName = process.env.npm_config_username || 'Anonymous';
  const rl = readline.createInterface(process.stdin, process.stdout);
  process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  console.log(
    '\x1b[32m%s\x1b[0m',
    `Please use "double quotes" for path with spaces.`
  );
  process.chdir(os.homedir());
  rl.setPrompt(`You are currently in ${process.cwd()}\n${userName}>`);
  rl.prompt();
  rl.on('line', async (line) => {
    const splittedLine = handlePath(line.trim());
    if (splittedLine.includes('.exit')) {
      rl.close();
    }
    if (splittedLine[0] === 'up') {
      try {
        if (splittedLine.length > 1) {
          throw new Error('invi');
        }
        process.chdir('..');
      } catch (err) {
        if (err.message === 'invi') {
          console.error('Invalid input');
        } else {
          console.error('Operation failed');
        }
      }
      rl.setPrompt(`You are currently in ${process.cwd()}\n${userName}>`);
    } else if (splittedLine[0] === 'cd') {
      changeDirectory(splittedLine[1]);
      rl.setPrompt(`You are currently in ${process.cwd()}\n${userName}>`);
    } else {
      await inputHandler(splittedLine);
    }
    rl.prompt();
  });
  rl.on('close', () => {
    console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
  });
};

startManager();
