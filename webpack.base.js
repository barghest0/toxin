const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/',
}
//директория со страницами
const PAGES_DIR = `${PATHS.src}/views/pages/`
//считываем все pug файлы
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.pug'))

module.exports = {
    //объект с путями для merge конфигов
    externals: {
        path: PATHS,
    },
    //точка входа
    entry: {
        app: PATHS.src,
    },
    //точка выхода
    output: {
        filename: `${PATHS.assets}js/[name].[fullhash].js`,
        path: PATHS.dist,
        publicPath: '/',
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },

    //кросс-браузерная совместимость
    module: {
        rules: [
            {
                //файлы
                test: /\.js$/,
                //лоадеры (транспилируют файлы)
                use: ['babel-loader'],
                //исключения
                exclude: '/node_modules/',
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: { config: 'postcss.config.js' },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-html-loader',
                    },
                ],
            },
        ],
    },

    //прописываем все плагины, которые подключаем
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[fullhash].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/${PATHS.assets}img`,
                    to: `${PATHS.assets}/img`,
                },
                {
                    from: `${PATHS.src}/static`,
                    to: '',
                },
            ],
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),

        new HtmlWebpackPlugin({
            template: `${PATHS.src}/views/pages/index.pug`,
            filename: `./index.html`,
        }),

        //перебираем страницы и меняем pug на html
        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}${page}`,
                    filename: `./${page.replace(/\.pug$/, '.html')}`,
                    minify: false,
                })
        ),
    ],
}
