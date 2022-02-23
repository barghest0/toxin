const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const PATHS = {
	src: path.join(__dirname, "./src"),
	dist: path.join(__dirname, "./dist"),
	assets: "assets/",
};
let pagesBlocks = ["ui-kit", "landing", "search-room", "login", "register", "room"];
const PAGES_DIR = `${PATHS.src}/views/pages/`;

const PAGES = pagesBlocks.map(
	item =>
		`${PAGES_DIR}${item}/` +
		fs.readdirSync(`${PAGES_DIR}${item}/`).filter(fileName => fileName.endsWith(".pug")),
);

module.exports = {
	externals: {
		path: PATHS,
	},

	entry: {
		app: PATHS.src,
	},

	output: {
		filename: `js/[name].[fullhash].js`,
		path: PATHS.dist,
		assetModuleFilename: "",
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: "vendors",
					test: /node_modules/,
					chunks: "all",
					enforce: true,
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,

				use: ["babel-loader"],

				exclude: "/node_modules/",
			},
			{
				test: /\.pug$/,
				use: ["pug-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: "asset/resource",
				generator: {
					filename: `${PATHS.assets}images/[name][ext]`,
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot)$/,
				type: "asset/resource",
				generator: {
					filename: `${PATHS.assets}fonts/[name][ext]`,
				},
			},

			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: { config: "postcss.config.js" },
						},
					},
					{
						loader: "resolve-url-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
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
					to: "",
				},
			],
		}),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),

		new HtmlWebpackPlugin({
			template: `${PATHS.src}/views/pages/index.pug`,
			filename: `./index.html`,
		}),

		...PAGES.map(page => {
			return new HtmlWebpackPlugin({
				template: page,
				filename: `${page
					.split("/")
					.at(-1)
					.replace(/\.pug$/, ".html")}`,
				minify: false,
			});
		}),
	],
};
