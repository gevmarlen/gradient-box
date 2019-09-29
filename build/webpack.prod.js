// webpack.prod.js

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./utils')

module.exports = merge(common, {
  mode: 'production',
  entry: [utils.resolve('src/js/gradient-box.ts')],
  output: {
    path: utils.resolve('dist'),
    filename: utils.assetsPath('gradient-box.min.js'),
    publicPath: '/'
  },
  plugins: [new CleanWebpackPlugin()]
})
