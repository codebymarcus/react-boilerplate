const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', path.resolve(__dirname, '../src', 'index.js')],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: {
      disableDotRule: true,
    },
    open: true,
    port: 9000,
    hot: true,
  },
};
