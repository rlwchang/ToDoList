const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ["react", "react-redux", "redux", "redux-promise", "axios"];

const config = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.s?css$/, use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}

module.exports = config
