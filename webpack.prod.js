const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const prodConfig = merge(baseConfig, {
    mode: 'production',
    output: {
        filename: `${baseConfig.externals.path.assets}js/[name].[fullhash].js`,
        path: baseConfig.externals.path.dist,
        publicPath: '',
        assetModuleFilename: 'assets/images/[name][ext]',
    },
})

module.exports = new Promise((resolve, reject) => {
    resolve(prodConfig)
})
