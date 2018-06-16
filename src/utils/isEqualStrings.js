export default (strings = []) => {
  if (!strings.length) {
    return false;
  }

  const firstStr = strings[0].trim();

  return strings.every(str => str.trim() === firstStr);
};
