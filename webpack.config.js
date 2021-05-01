const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/home/index',
        about: './src/about/index',
        contact: './src/contact/index'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'ts']
        }),
        new HtmlWebpackPlugin({
            title: 'home',
            filename: 'home.html',
            template: './src/home/template.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'about',
            filename: 'about.html',
            template: './src/about/template.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            title: 'contact',
            filename: 'contact.html',
            template: './src/contact/template.html',
            chunks: ['contact']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'] // 默认只有 js
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
};
