var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index:'./src/index.js',
        vendor:'./src/vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[contentHash].bundle.js'
    },
    module:{
        rules:[
            {test: /\.s[ac]ss$/i, use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']},
            {test: /\.css$/, use:[MiniCssExtractPlugin.loader,'css-loader']},
            {test:/\.html$/,use:[{loader:'html-loader', options: {}}]},
            {test: /\.(png|jpe?g|gif)$/i,use:[{loader:'file-loader', options: {name:"[name].[hash].[ext]",outputPath:'img',esModule:false}}]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contentHash].css'
        }),
        new CleanWebpackPlugin()
    ]
};