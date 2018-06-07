module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "rules": {
    "react/jsx-filename-extension": "off",
    "no-underscore-dangle": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }
};
