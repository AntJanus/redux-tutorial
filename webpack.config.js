var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    ['.', 'src', 'app', 'index.js'].join(path.sep)
  ],
  resolve: {
    modulesDirectories: ['node_modules']
  },
  output: {
    path: [__dirname, 'build'].join(path.sep),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
