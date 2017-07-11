'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const debug = process.env.NODE_ENV !== "production";

let config = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve('docs'),
		filename: 'bundle.js',
	},

	devServer: {
		contentBase: path.resolve('docs'),
		hot: true,
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader',
				})
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'file-loader?name=/images/[name].[ext]'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/i,
				loader: 'file-loader?name=/fonts/[name].[ext]'
			},
		],
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin('styles.css'),
	]
}

if (!debug) {
	config.plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}))
	config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
