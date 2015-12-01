'use strict'

var extend = require('xtend')

exports.android = android
exports.ios = ios

function android (id, options) {
  options = extend({
    native: false
  }, options)

  var base = options.native
    ? 'market://details?id='
    : 'http://play.google.com/store/apps/details?id='

  return base + id
}

function ios (id) {
  return 'https://itunes.apple.com/us/app/id' + id + '?mt=8'
}
