// webpack.prod.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const utils = require('./utils')

module.exports = merge(common, {
  mode: 'development',
  entry: [utils.resolve('src/js/index.ts'), utils.resolve('src/js/gradient-box.ts')],
  output: {
    path: utils.resolve('dist'),
    filename: utils.assetsPath('js/[name].js'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('src/index.pug')
    })
  ]
})
