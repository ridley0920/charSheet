var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod){
    nodeModules[mod]='commonjs '+mod;
  });

module.exports = {
  module: {
    // Special compilation rules
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        exclude: /node_modules/
      }
    ]
  },
  entry: './front/src/index.js',
  target: 'node',
  output: {
    path: './public/build',
    filename: 'build.js'
  },
  devServer:{
    port: 3001
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap'
}