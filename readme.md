<div align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/1147/1147083.svg" width="50" />
</div>
<h1 align="center">
  SPA Template
</h1>

A boilerplate for React Single Page Applications. A more flexible and optimized alternative to create-react-app.
<br></br>

## Table of Contents

- [Installation](#installation)
- [What's Inside?](#whatsInside)
- [Features](#features)
  <br></br>

## Installation <a name="installation"></a>

1. Download to project directory then install dependencies:

```sh
npm i
```

2. Launch development server:

```sh
npm run develop
```

## What's Inside? <a name="whatsInside"></a>

Notable Files And Folders

    .
    ├── server
        ├── index.js
    ├── src
        ├── assets
        ├── history
        ├── store
            ├── actions
            ├── reducers
            ├── index.js
        ├── styles
            ├── theme.js
        ├── App.jsx
        ├── index.html
        ├── index.js
    ├── .browserslistrc
    ├── .eslintrc
    ├── .gitignore
    ├── babel.config.js
    ├── package.json
    ├── postcss.config.js
    ├── readme.md
    ├── webpack.dev.js
    └── webpack.prod.js

1.  **`/src/history`**: Decouples browser history object from React Router.

2.  **`/src/store`**: Redux store setup, with Redux DevTools for development only.

3.  **`/src/styles`**: Theme Context and other styles.

4.  **`/src/App.jsx`**: Start of application-specific components, contains router setup.

5.  **`/src/index.js`**: Webpack entry point for bundling.
    <br></br>

## Features <a name="features"></a>

- Brotli compression
- Babel Polyfills Optimized
- Redux Store Setup (Optional)
- Material UI Setup (Optional)
- Code-Splitting Enabled
  <br></br>
