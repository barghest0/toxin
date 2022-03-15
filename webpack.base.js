const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/views/pages`;

const getEntries = pages => {
  const entries = {};
  const htmlPages = [];

  pages.forEach(name => {
    entries[name] = `${PAGES_DIR}/${name}/${name}.js`;
    htmlPages.push(
      new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: `${PAGES_DIR}/${name}/${name}.pug`,
        chunks: [name],
      }),
    );
  });

  return [entries, htmlPages];
};

const [entries, htmlPages] = getEntries(fs.readdirSync(PAGES_DIR));

module.exports = {
  entry: {
    ...entries,
  },

  output: {
    filename: `js/[name].[fullhash].js`,
    path: PATHS.dist,
    assetModuleFilename: '',
  },

  externals: {
    path: PATHS,
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
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}images/[name][ext]`,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}fonts/[name][ext]`,
        },
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
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[fullhash].css`,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/static`,
          to: '',
        },
      ],
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),

    ...htmlPages,
  ],
};
