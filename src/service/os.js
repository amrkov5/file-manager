import os from 'os';

const osOperations = (arg) => {
  if (!arg) {
    return 'Invalid Input';
  }
  const fixedArg = arg.replace('--', '');

  if (fixedArg === 'EOL') {
    console.log(JSON.stringify(os.EOL));
  }

  if (fixedArg === 'cpus') {
    const cpus = os.cpus();
    const result = cpus.map((el) => {
      return { model: el.model, speed: el.speed };
    });
    console.table(result);
  }

  if (fixedArg === 'homedir') {
    console.log(os.homedir());
  }

  if (fixedArg === 'username') {
    console.log(os.userInfo().username);
  }

  if (fixedArg === 'architecture') {
    console.log(os.arch());
  }

  console.log('Invalid input');
};

export default osOperations;
