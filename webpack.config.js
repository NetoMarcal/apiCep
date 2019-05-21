const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devServer: {
        port: 5000
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: './src/index.html',
        })
    ]
}