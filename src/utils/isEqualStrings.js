export default (...strings) => {
  const firstStr = strings[0].trim();

  return strings.every(str => str.trim() === firstStr);
}
