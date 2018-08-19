/**
 * description webpack config
 * @author zyl
 * @createAt 2018/8/19
 */

import path from 'path';
import webpack from 'webpack';

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};