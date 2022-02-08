const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const prodConfig = merge(baseConfig, {
	mode: 'production',
});

module.exports = new Promise((resolve, reject) => {
	resolve(prodConfig);
});
