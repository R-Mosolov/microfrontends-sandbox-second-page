const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Second Page',
      template: 'public/index.html',
    }),
  ]
};