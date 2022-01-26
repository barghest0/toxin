const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: `${baseConfig.externals.path.assets}js/[name].[fullhash].js`,
        path: baseConfig.externals.path.dist,
        publicPath: '/',
        assetModuleFilename: 'assets/images/[name][ext]',
    },
    devServer: {
        static: {
            directory: baseConfig.externals.path.dist,
            watch: true,
        },
        watchFiles: [
            'src/views/pages/*/*.pug',
            'src/views/components/*/*.pug',
            'src/**/*.scss',
        ],
        port: 8080,
        open: false,
    },
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})
