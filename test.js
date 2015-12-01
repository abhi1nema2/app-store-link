'use strict'

var test = require('tape')
var link = require('./')

test('ios', function (t) {
  var url = link.ios('myapp')
  t.ok(/itunes.apple.com.*?myapp/.test(url), 'itunes store')
  t.end()
})

test('google play web by default', function (t) {
  var url = link.android('myapp')
  t.ok(/play.google.com.*?myapp/.test(url), 'play store')
  t.end()
})

test('google play native option', function (t) {
  var url = link.android('myapp', {native: true})
  t.ok(/market:\/\/.*?myapp/.test(url), 'native play store')
  t.end()
})
