'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// 提取文件以版本号命名hash
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 压缩混淆代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  //入口
  entry: {
    main: './src/main.js',
  //  多入口文件
    vendors: ['vue', 'vue-router', 'axios']
  },
  output: {
    //所有产出资源路径
    path: path.join(__dirname, 'distUgly2.2'),
    filename: 'js/[name]-[chunkhash:6].js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      {
        test: /\.(jpg|png|svg|ttf|woff|woff2|gif|eot)$/,
        loader: 'url-loader',
        options: {
          limit: 4096, //4096字节以上生成文件，否则base6
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        /** 关键字函数可以统一放到.babellrc文件夹中去处理*/
        // options: {
        //   presets: ['es2015'], //关键字
        //   plugins: ['transform-runtime'], //函数
        // }
      },
      {
        test:/vue-preview.src.*?js$/,
        loader:'babel',

        // options: {
        //   presets: ['es2015'], //关键字
        //   plugins: ['transform-runtime'], //函数
        // }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
  //  提取css 文件
    new ExtractTextPlugin("css/[name]-[contenthash:6].css"),
  //  多文件入口
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
    }),
  //  压缩混淆代码
    new UglifyJsPlugin()
  ],
  devServer: {
    port: 3333
  }
 }