import path from 'path';

const isAbsolute = (pathToCheck) => {
  return path.isAbsolute(pathToCheck);
};

export default isAbsolute;
