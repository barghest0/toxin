const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

//делаем слияние с base конфигом
const devConfig = merge(baseConfig, {
    mode: 'development',
    //настройка сервера
    output: {
        filename: `${baseConfig.externals.path.assets}js/[name].[fullhash].js`,
        path: baseConfig.externals.path.dist,
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: baseConfig.externals.path.dist,
            watch: true,
        },
        watchFiles: ['src/views/pages/*.pug', 'src/**/*.scss'],
        port: 8080,
        open: false,
    },
})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})
