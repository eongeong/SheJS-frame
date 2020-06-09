const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry:  './js/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'js/' + 'index.js'
    },
    devServer: {
      inline: true,
      port: 4000
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename:"index.html",
        template:"./index.html",
        chunks:["index","vendor"],
        minify:{
          removeComment:true,
          collapseWhitespace:true
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            }
          }
        ]
    }
}