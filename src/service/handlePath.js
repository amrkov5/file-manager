const handlePath = (string) => {
  if (string.includes('"')) {
    const splittedPath = string.split('"');
    if (splittedPath[0].includes(' ')) {
      const handledPath = [
        ...splittedPath[0].split(' '),
        ...splittedPath.slice(1),
      ].filter((el) => !!el.trim());
      return handledPath;
    }
    return splittedPath;
  } else {
    const handledPath = string.split(' ');
    return handledPath;
  }
};

export default handlePath;
