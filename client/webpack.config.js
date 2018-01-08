const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludAessetsPlugin = require('html-webpack-include-assets-plugin');

const VENDOR_LIBS = ["react", "react-redux", "redux", "redux-promise", "axios", "dateformat"];

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
      },
      {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',    // where the fonts will go
             publicPath: '../'       // override the default path
           }
         }]
       }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new ExtractTextPlugin("styles/styles.css"),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    // new HtmlWebpackIncludAessetsPlugin({
    //   assets: ["./styles.css"],
    //   append: true
    // })
  ],
  devServer: {
    proxy: {
      "/api/todos": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true
      }

    }
  }
}

module.exports = config
