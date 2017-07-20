var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry:  path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
           {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ],
    },
    
};