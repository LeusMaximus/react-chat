export default function(title) {
  try {
    return title
    .split(' ')
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('');
  } catch (e) {
    console.error(e);
    return '';
  }
};
