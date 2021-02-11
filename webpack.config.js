const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './bin'),
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },]
    },
    devServer: {
        contentBase: path.join(__dirname, 'bin'),
        hot: true,
        port: 3000,
    },
    plugins: [
        new webpack.ProvidePlugin({
            m: 'mithril',
        }),
        new HtmlWebpackPlugin({
            title: 'Mithril Gallery',
            favicon: "./src/static/favicon.png"
        })
    ]
}