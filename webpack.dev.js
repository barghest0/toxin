const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig, {
  mode: 'development',

  devServer: {
    static: {
      directory: baseConfig.externals.path.dist,
      watch: true,
    },

    port: 8080,
    open: false,
  },
});

module.exports = devConfig;
