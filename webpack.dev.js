const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')

//делаем слияние с base конфигом
const devConfig = merge(baseConfig, {
    mode: 'development',
    //настройка сервера
    devServer: {
        static: {
            directory: baseConfig.externals.path.dist,
            watch: true,
        },
        port: 8080,
        open: true,
    },

})

module.exports = new Promise((resolve, reject) => {
    resolve(devConfig)
})
