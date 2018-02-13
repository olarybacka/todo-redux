module.exports = {

  "extends": "airbnb",
  "parser": "babel-eslint",

  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "react/prop-types": 0,
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "react/display-name": [false],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "no-trailing-spaces": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
      'react/display-name': ['off', { ignoreTranspilerName: true }]
  }
}