const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");

const pages = fs
  .readdirSync(path.resolve(__dirname, "src"))
  .filter((fileName) => fileName.endsWith(".twig"));

module.exports = {
  entry: "./src/js/index.js",
  resolve: {
    extensions: [".js", ".scss", ".css"],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      vue$: "vue/dist/vue.esm.js",
    },
  },
  // devServer: { //for express js communicate with webpack - express js to run the backend node js
  //   proxy: {
  //     '/api/**': 'http://localhost:3030',
  //   },
  // },
  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: "src/" + page,
          filename: page.replace(".twig", ".html"),
          inject: true,
        })
    ),
    new SVGSpritemapPlugin("src/assets/icons/**/*.svg", {
      output: {
        filename: "assets/icons/icons.svg",
      },
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    }),
  ],
};
