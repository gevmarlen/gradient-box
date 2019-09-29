const path = require('path')

exports.resolve = function(dir) {
  return path.join(__dirname, '..', dir)
}

exports.assetsPath = function(dir) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ? '' : './'

  return path.posix.join(assetsSubDirectory, dir)
}
