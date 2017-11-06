/**
 * webpack 配置
 * @author shan-er
 */
const merge = require('webpack-merge');
const config = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var prodConf = merge(config, {
    devtool: '#nosources-source-map',
    output: {
        publicPath: ''
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin(['release'], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false,
            exclude: ['dll']
        })
    ]
});
module.exports = prodConf;