var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              //options: {
              //modules: true,
              //localIdentName: '[name]__[local]___[hash:base64:5]',
              //},
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                //localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
    ],
  },
  devtool: 'nosources-source-map',
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/main.css',
      allChunks: true,
      disable: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
