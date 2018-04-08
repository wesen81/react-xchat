const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Plugin Settings

const sass = new ExtractTextPlugin("resources/docler.min.css");

const html = new HtmlPlugin({
	title: 'React XChat Application',
	minify: {
		html5: true,
		removeComments: true,
		collapseWhitespace: true
	},
	template: './src/templates/index.html'
});

const copy = new CopyPlugin([
	{ from: './src/resources/images/*', to: 'resources/images', flatten: true},
	{ from: './node_modules/font-awesome/fonts/*', to: 'resources/fonts', flatten: true}
]);

const uglify = new UglifyJsPlugin({
	uglifyOptions: {
		compress: true,
		comments: false,
		output: {
			comments: false,
			beautify: false
		}
	},

});

// Webpack config

module.exports = {
    entry: './src/index.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
        filename: 'resources/docler.min.js'
    },
    plugins: [
        sass,
		html,
	    copy,
		uglify
    ],
    module: {
        rules: [
            { 
                test: /\.js|jsx?$/,
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
			{
				test: /\.scss$/,
				use: sass.extract({
					use: [
						{
							loader: "css-loader",
							options: {
								url: false,
								minimize: true
							}
						},
						{
							loader: "sass-loader",
						},
					],
					// use style-loader in development
					fallback: "style-loader",
				})
			}
		]
    },
	devServer: {
		contentBase: './dist',
		open: true,
		host: 'localhost',
		port: 3001
	}
};