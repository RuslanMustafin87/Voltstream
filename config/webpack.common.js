const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const PATHS = {
	source: resolve(__dirname, "..", "src"),
	build: resolve(__dirname, "..", "dist"),
};

module.exports = {
	entry: {
		index: `${PATHS.source}/index.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|dist)/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.pug$/,
				loader: "pug-loader",
				options: {
					pretty: false,
				},
			},
			{
				test: /\.(jpe?g|png|webp|avif)$/,
				type: "asset/resource",
				generator: { filename: "assets/images/[name].[contenthash:8][ext]" },
			},
			{
				test: /\.svg$/,
				type: "asset",
				generator: { filename: "assets/images/icons/[name].[contenthash:8][ext]" },
				parser: { dataUrlCondition: { maxSize: 2 * 1024 } },
				use: [{ loader: "svgo-loader", options: { plugins: [{ name: "cleanupIDs", active: false }] } }],
			},
			{
				test: /\.woff2|woff|ttf$/,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name].[contenthash:8][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: `${PATHS.source}/index.pug`,
			chunks: ["index", "bootstrap"],
			excludeChunks: ["swiper"],
			title: "Voltstream",
		}),
		new FriendlyErrorsWebpackPlugin(),
		new FaviconsWebpackPlugin({
			logo: `${PATHS.source}/images/icons/lightning.svg`,
			publicPath: "assets/favicons/",
			outputPath: "assets/favicons/",
			prefix: "",
			favicons: {
				appName: "Voltstream",
				start_url: "/",
				display: "standalone",
				orientation: "any",
				background: "#fff",
				theme_color: "#F2323D",
				icons: {
					android: [
						"android-chrome-16x16.png",
						"android-chrome-32x32.png",
						"android-chrome-192x192.png",
						"android-chrome-512x512.png",
					],
					favicons: ["favicon-16x16.png", "favicon-32x32.png"],
					appleIcon: ["apple-touch-icon-180x180.png", "apple-touch-icon-precomposed.png", "apple-touch-icon.png"],
					appleStartup: false,
					windows: false,
					yandex: false,
				},
			},
		}),
	],
};
