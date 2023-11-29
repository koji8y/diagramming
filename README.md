Diagramming codes
====
This repository is for trial codes for diagramming in javascript.

# How to run the code to understand the code and configuration files
## Prerequsites
- node 18 or later (The author uses 20.9.0)
## Steps
1. `npm install`
2. `npm run start`

# FYI: Steps to create package.json and configuration files from scratch.
1. `npm init --yes`
2. `npm install --save-dev webpack`
3. `npm install --save-dev webpack-cli`
4. `npm install i -D webpack-dev-server # equivalent to npm install --save-dev webpack-dev-server`
5. `npm install --save-dev @babel/core`
6. `npm install --save-dev @babel/preset-env`
7. `npm install --save-dev babel-loader`
8. `npm install --save-dev jointjs`
9. `npm install --save-dev css-loader style-loader`
10. Create .babelrc
11. Create webpack.config.js
12. `npm install --save-dev diagram-js`
13. `mkdir src`
14. Write src/index.js and referenced code.
15. `./node_modules/.bin/webpack`
16. Write dist/index.html
17. `npx webpack serve --mode development`
