var slice = require('sliced')
var raf   = require('raf')

module.exports = debounce

function debounce(fn, now) {
  var args = null
  var ctx = null

  // I don't know why, but adding this
  // comment seems to stop uglify from
  // breaking this code.

  return debounced

  function debounced() {
    if (args !== null) return
    args = slice(arguments)
    ctx = this
    if (now) fn.apply(ctx, args)
    raf(next)
  }

  function next() {
    if (!now) fn.apply(ctx, args)
    args = null
    ctx = null
  }
}
