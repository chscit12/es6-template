 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './src/client.js',
     output: {
         path: path.resolve(__dirname, 'web/dist/'),
         filename: 'bundle.js'
     },
     resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     }
 };