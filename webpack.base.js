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
let pagesBlocks = ['uikit']
const PAGES_DIR = `${PATHS.src}/views/pages/`

const PAGES = pagesBlocks.map(
    item =>
        `${PAGES_DIR}${item}/` +
        fs
            .readdirSync(`${PAGES_DIR}${item}/`)
            .filter(fileName => fileName.endsWith('.pug'))
)

module.exports = {
    externals: {
        path: PATHS,
    },

    entry: {
        app: PATHS.src,
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

    module: {
        rules: [
            {
                test: /\.js$/,

                use: ['babel-loader'],

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
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
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

        ...PAGES.map(page => {
            console.log(page)
            return new HtmlWebpackPlugin({
                template: page,
                filename: `${page
                    .split('/')
                    .at(-1)
                    .replace(/\.pug$/, '.html')}`,
                minify: false,
            })
        }),
    ],
}
