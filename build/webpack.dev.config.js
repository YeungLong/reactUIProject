const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");

module.exports = merge(webpackBaseConfig, {
    devtool: "#@source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process-env": {
                "NODE_ENV": '"development"'
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ["react-vendor"]
        // }),
        new HtmlWebpackPlugin({
            title: "react项目工程",
            template: '../index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
})