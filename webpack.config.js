const { webpack, ProvidePlugin } = require("webpack");
const path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'master.js'
	},
	mode: "development",
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules:[{
			test: /\.ts?$/,
			loader: 'babel-loader',
		}]
	},
	plugins: [
		new ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		})
	],
}
