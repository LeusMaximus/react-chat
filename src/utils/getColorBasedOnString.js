import colors from './getMUIColors';

/**
 *
 * @param {*} value
 * @return {string}
 */
export default function colorFrom(value) {
  try {
    const index = [...value.toString()].reduce((sum, char) => sum + char.charCodeAt(), 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    // console.warn(e);
    return 'lightgrey';
  }
}
