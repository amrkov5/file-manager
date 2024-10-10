import fs from 'fs/promises';
import process from 'process';

const listFiles = async () => {
  try {
    const files = await fs.readdir(process.cwd());
    const directoryArr = [];
    const fileArr = [];
    const epermArr = [];
    await Promise.all(
      files.map(async (el) => {
        try {
          const stats = await fs.stat(el);
          if (stats.isDirectory()) {
            directoryArr.push({ Name: el, Type: 'directory' });
          } else {
            fileArr.push({ Name: el, Type: 'file' });
          }
        } catch {
          epermArr.push({ Name: el, Type: 'Access denied' });
        }
      })
    );
    directoryArr.sort((a, b) => a.Name.localeCompare(b.Name));
    fileArr.sort((a, b) => a.Name.localeCompare(b.Name));
    epermArr.sort((a, b) => a.Name.localeCompare(b.Name));
    console.table(directoryArr.concat(fileArr).concat(epermArr));
  } catch (err) {
    if (err.code === 'EPERM') {
      console.error(`Operation failed: Access denied. No sufficient rights.`);
    } else {
      console.error(`Operation failed`);
    }
  }
};

export default listFiles;
