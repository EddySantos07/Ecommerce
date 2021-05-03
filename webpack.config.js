const path = require("path");
const webpack = require("webpack");

const config = {
  /*  entry is where to enter and find our file
    output is where to bundle everything and put it into
    resolve these extensions so we dont have to teddiously have to write it out
    */

  entry: path.join(__dirname, "/client/src/App/index.js"),
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  mode: "development",

  resolve: {
    extensions: [".tsx", ".ts", ".mjs", ".js", ".jsx", ".css", ".scss"],
  },

  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};

module.exports = config;
