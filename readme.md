# Game Dev Webpack Build

This is a webpack front-end build system with babel, twig and less. It comes with auto-reload for development and postcss for production builds.

### Installation

This requires [Node.js](https://nodejs.org/) to run. The version should be greater than 10.

Install all the dependencies.

```sh
$ npm install
```

To run a development server

```sh
$ npm run dev
```

To build for production

```sh
$ npm run build
```

To deploy to the hosting

```sh
$ npm run build
```

### What the Production build does

- It bundles all the JS and CSS into their one file, respectively.
- It minifies the CSS and JS. This can be turned off if needed by configuring `webpack.prod.js`.
- It builds the twig templates into HTML
- It also builds the SVG icon sprite map for all the icons placed in the icons folder


Developer/s should create their working branches and work in the branch. After completing the development in the branch, you have to merge to the MAIN branch. MAIN branch will act as the center branch for all of your branches.