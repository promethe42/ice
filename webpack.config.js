var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ice',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        include: require.resolve('./src/ice.js'),
        loader: 'exports-loader?window.ice',
      },
      {
        test: /\.js/,
        use: 'imports-loader?this=>window,ice=>window.ice'
      }
    ]
  },
  externals: nodeModules,
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      rangy: 'rangy',
    })
  ],
  devtool: 'sourcemap'
}
