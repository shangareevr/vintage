const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
var $ = require("jquery");

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		open: true,
		hot: true,
	},
	entry: {
    index: './src/index.js',
    design: './src/design.js',
    services: './src/services.js',
    about: './src/about.js',
		portfolio: './src/portfolio.js',
		about: './src/zilart duplex.js',
		portfolio: './src/contacts.js',
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].js',
		assetModuleFilename: 'assets/[name][ext]',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
			chunks: ['index'],
		}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'design.html'),
      filename: 'design.html',
			chunks: ['design'],
  }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'services.html'),
      filename: 'services.html',
			chunks: ['services'],
  }),
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src', 'portfolio.html'),
		filename: 'portfolio.html',
		chunks: ['portfolio'],
		
}),
new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'src', 'about.html'),
	filename: 'about.html',
	chunks: ['about'],
}),
new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'src', 'zilart duplex.html'),
	filename: 'zilart-duplex.html',
	chunks: ['zilart duplex'],
}),
new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'src', 'contacts.html'),
	filename: 'contacts.html',
	chunks: ['contacts'],
}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new webpack.ProvidePlugin({
			identifier: path.resolve(path.join(__dirname, 'src/module1')),
			$: 'jquery',
 		  jQuery: 'jquery',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					'group-css-media-queries-loader',
					{
						loader: 'resolve-url-loader',
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
				test: /\.woff2?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				use: devMode
					? []
					: [
							{
								loader: 'image-webpack-loader',
								options: {
									mozjpeg: {
										progressive: true,
									},
									optipng: {
										enabled: false,
									},
									pngquant: {
										quality: [0.65, 0.9],
										speed: 4,
									},
									gifsicle: {
										interlaced: false,
									},
									webp: {
										quality: 75,
									},
								},
							},
						],
				type: 'asset/resource',
			},
			{
				test: /\.m?js$/i,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: '$',
            override: true,
          }
        },
      },
      {
        test: require.resolve("underscore"),
        loader: "expose-loader",
        options: {
          exposes: [
            "_.map|map",
            {
              globalName: "_.reduce",
              moduleLocalName: "reduce",
            },
            {
              globalName: ["_", "filter"],
              moduleLocalName: "filter",
            },
          ],
        },
      },
		],
	},
};