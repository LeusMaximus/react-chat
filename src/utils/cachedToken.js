export default {
  set: token => localStorage.setItem('token', token),
  get: () => localStorage.getItem('token'),
}
