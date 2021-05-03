const fs = require('fs');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        openPage: 'home.html',
        open: true,
        contentBase: './dist',
        host: '192.168.1.152',
        port: 4200,
        https: {
            key: fs.readFileSync('C:\\self-signed-certificate\\192.168.1.152.key'),
            cert: fs.readFileSync('C:\\self-signed-certificate\\192.168.1.152.crt')
        },
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'development'
        })
    ]
});
