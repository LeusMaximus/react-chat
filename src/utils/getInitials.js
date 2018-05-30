/**
 * Get the first letters from the first two words of the title in uppercase.
 * @param {string} title
 * @return {string}
 */
export default function(title) {
  try {
    return title
      .split(' ')
      .slice(0, 2)
      .map(word => word[0].toUpperCase())
      .join('');
  } catch (e) {
    // console.warn(e);
    return '';
  }
};
