var path = require('path');

module.exports = {
  entry: './src/index.js',
  output : {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  }
};
