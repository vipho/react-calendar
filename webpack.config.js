const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        // filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {},
                },
            },
            {
                test: /\.pug$/,
                use: ['pug-loader'],
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'preact-svg-loader',
            }
        ]
    },
    devServer: {
        port: 9000,
        host: '0.0.0.0',
    },
    resolve: {
        alias: {},
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
        }),
    ],
}
