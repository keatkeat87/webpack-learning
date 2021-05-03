const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home/home'
        // about: './src/about/about',
        // contact: './src/contact/contact'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: isProduction ? '[name].[contenthash].js' : '[name].js',
        assetModuleFilename: 'assets/[name]-[hash]-[ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'ts']
        }),
        ...(
            isProduction
                ? [new MiniCssExtractPlugin({
                    filename: '[name].[contenthash].css',
                    chunkFilename: '[id].[contenthash].css'
                })]
                : []
        ),
        new HtmlWebpackPlugin({
            title: 'home',
            filename: 'home.html',
            template: './src/home/home.html',
            chunks: ['home']
        })
        // new HtmlWebpackPlugin({
        //     title: 'about',
        //     filename: 'about.html',
        //     template: './src/about/about.html',
        //     chunks: ['about']
        // }),
        // new HtmlWebpackPlugin({
        //     title: 'contact',
        //     filename: 'contact.html',
        //     template: './src/contact/contact.html',
        //     chunks: ['contact']
        // })
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
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader', 'postcss-loader', 'sass-loader'
                ]
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
    ...(isProduction
        ? {
            optimization: {
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        terserOptions: {
                            format: {
                                comments: false
                            }
                        },
                        extractComments: false
                    }),
                    ...(isProduction ? [new CssMinimizerPlugin()] : [])
                ],
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        commons: {
                            name: 'commons',
                            chunks: 'all',
                            minChunks: 2,
                            minSize: 1
                        },
                        vendors: {
                            name: 'vendors',
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'all'
                        }
                    }
                }
            }
        }
        : undefined
    )
};



