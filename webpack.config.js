var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      //{
      //test: /\.css$/,
      //use: ExtractTextPlugin.extract({
      //fallback: 'style-loader',
      //use: [
      //{
      //loader: 'css-loader',
      //options: {
      //modules: true,
      //localIdentName: '[name]__[local]___[hash:base64:5]',
      //},
      //},
      //],
      //}),
      //},
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 2, sourceMap: true },
          },
          'sass-loader',
        ],
        //use: ExtractTextPlugin.extract({
        //fallback: 'style-loader',
        //use: [
        //{
        //loader: 'css-loader',
        //options: {
        //modules: true,
        //sourceMap: true,
        //importLoaders: 2,
        ////localIdentName: '[name]__[local]___[hash:base64:5]',
        //},
        //},
        //'sass-loader',
        //],
        //}),
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    //new ExtractTextPlugin({
      //filename: 'styles/main.css',
      //allChunks: true,
      //disable: true,
    //}),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],
};
