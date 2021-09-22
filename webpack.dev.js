const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

//делаем слияние с base конфигом
const devConfig = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    //настройка сервера
    devServer: {
        static: {
            directory: baseConfig.externals.path.dist,
        },
        port: 8081,
        open: true,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})
