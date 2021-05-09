const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    merge
} = require('webpack-merge')
const devConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')

const commonConfig = {
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./dist/async.html",
            filename: "async.html",
            hot: true,
            chunks: "./src/async.js",
        }),
        new HtmlWebpackPlugin({
            template: "./dist/callback.html",
            filename: "callback.html",
            hot: true,
            chunks: "./src/callback.js",
        }),
        new HtmlWebpackPlugin({
            template: "./dist/promise.html",
            filename: "promise.html",
            hot: true,
            chunks: "./src/promise.js",
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
}

module.exports = env => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig)
    } else {
        return merge(commonConfig, devConfig)
    }
}