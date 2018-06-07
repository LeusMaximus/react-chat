export default ({ username = '', firstName = '', lastName = '' }) =>
  (firstName && lastName ? `${firstName} ${lastName}` : username);
