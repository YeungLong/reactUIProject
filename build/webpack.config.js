// webpack v4
const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExTractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  
  entry: { 
	  main: './src/app.js',
	  vonder: ["react", "react-dom", "react-router"]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
	  filename: '[name].js',
	  chunkFilename: "[name].[chunkhash].chunk.js"
  },
  module: {
    rules: [{
        	test: /\.js[x]?$/,
        	use: {
          		loader: "babel-loader"
			},
			exclude: /node_modules/
      	}, {
	     	test: /\.css$/,
	     	use: [
	       		{
	         		loader: MiniCssExtractPlugin.loader,
	        		 options: {
	           			publicPath: '../'
	         		}
	       		},
	       		"css-loader"
	     	]
		}, { 
			test:/\.less$/,
			use: ['style-loader', 'css-loader','less-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/i,
			use: {
				loader: "file-loader",
				options: {
					limit: 2048,
					name: path.posix.join('img/[name].[hash:8].[ext]')
				}
			}
		}, {
			test: /\. (woff|woff2|eot|ttf|otf)$/,
			use: [
				'file-loader'
			]
		}, {
			test: /\.html$/,
			use: [
				{
					loader: "html-loader",
					options: { minimize: true }
				}
			]
		}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
      template: './index.html',
      filename: 'index.html'
	}),
	
  ],
  optimization: {
	splitChunks: {
		cacheGroups: {
			commons: {
				name: "commons",
				chunks: "initial",
				minChunks: Infinity
			}
		}
	}
  },
  resolve: {
	extensions: ['.js', '.jsx'],
	alias: {
		// 'vue': 'vue/dist/vue.esm.js',
		// '@': resolve('../src'),
	}
  }
};