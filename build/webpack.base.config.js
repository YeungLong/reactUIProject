const path = require("path");
const ExTractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "../src/app.js",
        vendor: ["react", "react-dom", "react-router"]
    },
    output: {
        path: __dirname + "/dist/",
        publicPath: "reactTest/dist/",
        fileName: "[name].js",
        chuckFileName: "[name].[chuckhash:6].js"
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            loader: "babel"
        }, {
            test: /\.css$/,
            use: ExTractTextPlugin.extract({
                use: ["css-loader?minimize", "autoprefixer-loader"],
                fallback: "style-loader"
            })
        }, {
            test: /\.less$/,
            use: ExTractTextPlugin.extract({
                use: ["css-loader?minimize", "autoprefixer-loader", "less-loader"],
                fallback: "style-loader"
            })
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: "url-loader?limit=1024"
        }, {
            test: /\.(html|tpl)$/,
            loader: "html-loader"
        }]
    },
    plugin: [
        new ExTractTextPlugin({
            filename: "[name].css",
            allChunks: true
        })
    ]
}