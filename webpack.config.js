const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/assets/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/fonts/*",
                    to: "assets/fonts",
                },
                {
                    from: "src/assets/img/*",
                    to: "assets/img",
                },
                {
                    from: "src/assets/svg/*",
                    to: "assets/svg",
                },
            ],
        }),
        new CleanWebpackPlugin()
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
