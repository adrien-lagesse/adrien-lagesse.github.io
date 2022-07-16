const path = require("path")

module.exports = {
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    mode: "production",
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
            }
        ]
      }
};