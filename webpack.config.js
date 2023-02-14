const path = require('path');

module.exports = {
  //...
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve (__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.jsx$/,
      exclude: /(node_modules)/,
        use: { loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
            ]
          }
        },
        test: /\.css$/,
        use: { loader: 'css-loader'},
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  }
};