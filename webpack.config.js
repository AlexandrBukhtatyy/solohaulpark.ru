const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/assets/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "hello webpack",
            template: "./src/index.html",
            // chunks: ['main']
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/css",
                    to: "assets/css",
                },
                {
                    from: "src/assets/fonts",
                    to: "assets/fonts",
                },
                {
                    from: "src/assets/img",
                    to: "assets/img",
                },
            ],
        }),
        new SVGSpritemapPlugin({
            sprite: {
                prefix: false,
            },
            output: {
                filename: '/assets/svg/sprite.svg',
                svg4everybody: true,
                svgo: true,
            }
        }),
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],

    }
}
