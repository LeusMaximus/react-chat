const { compose } = require('react-app-rewired');
const rewirePolyfills = require('react-app-rewire-polyfills');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = compose(
  rewirePolyfills,
  rewireEslint,
);
