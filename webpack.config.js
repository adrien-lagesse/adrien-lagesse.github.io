const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, './')
      },
      hot: 'only',
      liveReload: false,
      compress: true,
      port: 9000,
   },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react']
                  }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
                }
            },
            {
              test: /\.js$/,
              enforce: "pre",
              use: ["source-map-loader"],
            }
        ],
      }
};