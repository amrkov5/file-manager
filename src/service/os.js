import os from 'os';

const osOperations = (arg) => {
  if (!arg) {
    console.error('Invalid Input');
    return;
  }
  const fixedArg = arg.replace('--', '');

  if (fixedArg === 'EOL') {
    console.log(JSON.stringify(os.EOL));
    return;
  }

  if (fixedArg === 'cpus') {
    const cpus = os.cpus();
    const result = cpus.map((el) => {
      return { model: el.model, speed: el.speed };
    });
    console.table(result);
    return;
  }

  if (fixedArg === 'homedir') {
    console.log(os.homedir());
    return;
  }

  if (fixedArg === 'username') {
    console.log(os.userInfo().username);
    return;
  }

  if (fixedArg === 'architecture') {
    console.log(os.arch());
    return;
  }
  console.error('Invalid Input');
};

export default osOperations;
