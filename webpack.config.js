var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.[contentHash].js'
    },
    module:{
        rules:[
            {test: /\.s[ac]ss$/i, use:['style-loader','css-loader','sass-loader']},
            {test: /\.css$/, use:['style-loader','css-loader']},
            {test:/\.html$/,use:[{loader:'html-loader', options: {}}]},
            {test: /\.(png|jpe?g|gif)$/i,use:[{loader:'file-loader', options: {name:"[name].[hash].[ext]",outputPath:'img',esModule:false}}]}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin()
    ]
};