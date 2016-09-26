var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },


      {
        test: /\.css$/,
        loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  }
}

/*
 ,
 resolve: {
 extensions: ['', '.js', '.jsx', '.css']
 }
 {
 test: /\.css$/,
 loader: "style-loader!css-loader?modules"
 }
 {
 test: /\.css$/,
 loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
 },
 {
 test: /\.css?$/,
 loaders: [ 'style', 'raw' ],
 include: __dirname
 },
* */