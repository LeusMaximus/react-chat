const storage = localStorage;

export default {
  set: token => storage.setItem('token', token),
  get: () => storage.getItem('token'),
  remove: () => storage.removeItem('token'),
}
