const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home/home',
        about: './src/about/about',
        contact: './src/contact/contact'
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
            template: './src/home/home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'about',
            filename: 'about.html',
            template: './src/about/about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            title: 'contact',
            filename: 'contact.html',
            template: './src/contact/contact.html',
            chunks: ['contact']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                swiper: {
                    test: /[\\/]node_modules[\\/]swiper[\\/]/,
                    name: 'swiper',
                    chunks: chunk => chunk.name !== 'home' && chunk.name !== 'landing-page',
                    priority: 1
                },
                jquery: {
                    test: /[\\/]node_modules[\\/]jquery[\\/]/,
                    name: 'jquery',
                    chunks: chunk => chunk.name !== 'home' && chunk.name !== 'landing-page',
                    priority: 1
                }
            }
        }
    }
};
