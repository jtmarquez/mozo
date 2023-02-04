module.exports = {
     "env": {
        "node": true,
        "es2021": true
    },
    "extends": ["airbnb-typescript/base", "prettier"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": ["./tsconfig.json"]
    },
    "plugins": ["no-only-tests", "@typescript-eslint", "prettier", 'import'],
    "rules": {
      "quotes": [2, "single"],
      "import/prefer-default-export": "off",
      "class-methods-use-this": "off",
      "max-len": [2, { "code": 100, "ignorePattern": "^import .*" }],
      "extraneous-dependencies": [0],
      "import/no-extraneous-dependencies": [
        "error", {
           "devDependencies": false, 
           "optionalDependencies": false, 
           "peerDependencies": false, 
           "packageDir": './'
        }
      ],
      "func-style": ["error", "expression"],
      "no-only-tests/no-only-tests": "error",
      "prettier/prettier": 2
    },
    "overrides": [{
      "files": [ "migrations/*" ],
      "rules": {
        "max-len": "off"
      }
    }]
}

